import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapLocation, JourneyRoute, getRoutesForEra } from '@/data/mapData';
import { BiblicalEra } from '@/data/bibleBooks';

interface BibleMapProps {
  locations: MapLocation[];
  era: BiblicalEra;
  candlelight: boolean;
}

function createPinIcon(era: BiblicalEra, isActive: boolean): L.DivIcon {
  const colors: Record<BiblicalEra, string> = {
    Primeval: '#6B8E23',
    Patriarchal: '#8B6914',
    'Exodus & Wilderness': '#C5A059',
    Monarchy: '#6B0F1A',
    'Divided Kingdom': '#4A7C59',
    'Exile & Return': '#3A6B5C',
    Gospel: '#B8860B',
    'Apostolic & Revelation': '#6B4226',
  };
  const color = colors[era];
  return L.divIcon({
    className: 'custom-pin-icon',
    html: `<div style="
      width: ${isActive ? 18 : 12}px;
      height: ${isActive ? 18 : 12}px;
      background: ${color};
      border: 2px solid #C5A059;
      border-radius: 50%;
      box-shadow: 0 0 ${isActive ? 15 : 8}px rgba(197, 160, 89, ${isActive ? 0.8 : 0.4});
      transition: all 0.3s ease;
    "></div>`,
    iconSize: [isActive ? 18 : 12, isActive ? 18 : 12],
    iconAnchor: [isActive ? 9 : 6, isActive ? 9 : 6],
  });
}

function getTileUrl(candlelight: boolean): string {
  return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
}

export function BibleMap({ locations, era, candlelight }: BibleMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const routesRef = useRef<L.Polyline[]>([]);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const map = L.map(containerRef.current, {
        center: [31.5, 35.2],
        zoom: 5,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
      });

      const tileLayer = L.tileLayer(getTileUrl(candlelight), {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
      tileLayerRef.current = tileLayer;
      mapRef.current = map;

      setTimeout(() => map.invalidateSize(), 100);

      return () => {
        map.remove();
        mapRef.current = null;
        tileLayerRef.current = null;
        markersRef.current = [];
        routesRef.current = [];
      };
    } catch {
      // Map initialization can fail if container has zero dimensions
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !tileLayerRef.current) return;

    map.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.removeLayer(layer);
      }
    });

    const newTileLayer = L.tileLayer(getTileUrl(candlelight), {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    tileLayerRef.current = newTileLayer;
  }, [candlelight]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => {
      try { map.removeLayer(m); } catch { /* already removed */ }
    });
    markersRef.current = [];

    locations.forEach((loc) => {
      try {
        const marker = L.marker([loc.lat, loc.lng], {
          icon: createPinIcon(loc.era, true),
        }).addTo(map);

        marker.bindPopup(
          `<div style="text-align: center; min-width: 140px;">
            <div style="font-size: 1.1rem; font-weight: 600; color: #6B0F1A; margin-bottom: 4px; font-family: 'Cormorant Garamond', serif;">${loc.name}</div>
            <div style="font-size: 0.9rem; color: #1E1613; font-family: 'Cormorant Garamond', serif;">${loc.note}</div>
          </div>`,
        );

        markersRef.current.push(marker);
      } catch {
        // skip markers that fail
      }
    });

    if (locations.length > 0) {
      try {
        const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 7 });
      } catch {
        // bounds fitting can fail with invalid coordinates
      }
    }
  }, [locations]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    routesRef.current.forEach((r) => {
      try { map.removeLayer(r); } catch { /* already removed */ }
    });
    routesRef.current = [];

    const routes = getRoutesForEra(era);
    routes.forEach((route) => {
      const routeLocations = route.locationIds
        .map((id) => locations.find((l) => l.id === id) || null)
        .filter((l): l is MapLocation => l !== null);

      if (routeLocations.length < 2) return;

      try {
        const latlngs = routeLocations.map((l) => [l.lat, l.lng]) as [number, number][];
        const polyline = L.polyline(latlngs, {
          color: route.color,
          weight: 3,
          opacity: 0.7,
          dashArray: '10, 8',
        }).addTo(map);

        routesRef.current.push(polyline);
      } catch {
        // skip routes that fail
      }
    });
  }, [era, locations]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full rounded-lg overflow-hidden border border-gold-300/30 ${candlelight ? 'map-dark-filter' : ''}`}
      style={{ minHeight: '280px' }}
    />
  );
}
