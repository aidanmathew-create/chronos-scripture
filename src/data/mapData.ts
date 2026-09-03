import { BiblicalEra } from './bibleBooks';

export interface MapLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  note: string;
  era: BiblicalEra;
}

export const MAP_LOCATIONS: MapLocation[] = [
  { id: 'ur', name: 'Ur of the Chaldees', lat: 30.9628, lng: 46.1042, note: 'Birthplace of Abraham, the father of faith.', era: 'Patriarchal' },
  { id: 'harran', name: 'Harran', lat: 36.8667, lng: 39.0333, note: 'Abraham stopped here on his journey to Canaan.', era: 'Patriarchal' },
  { id: 'shechem', name: 'Shechem', lat: 32.2069, lng: 35.2811, note: 'God first promised Canaan to Abraham here.', era: 'Patriarchal' },
  { id: 'bethel', name: 'Bethel', lat: 31.9311, lng: 35.2133, note: 'Jacob saw a ladder to heaven here.', era: 'Patriarchal' },
  { id: 'hebron', name: 'Hebron', lat: 31.5326, lng: 35.0939, note: 'Abraham settled near the oaks of Mamre.', era: 'Patriarchal' },
  { id: 'beersheba', name: 'Beersheba', lat: 31.2518, lng: 34.7913, note: 'Isaac and Abraham dug wells here.', era: 'Patriarchal' },
  { id: 'egypt', name: 'Egypt', lat: 30.0444, lng: 31.2357, note: 'Joseph rose to power and Jacob\'s family sought refuge.', era: 'Patriarchal' },
  { id: 'sinai', name: 'Mount Sinai', lat: 28.5392, lng: 33.9747, note: 'Moses received the Ten Commandments here.', era: 'Exodus' },
  { id: 'red-sea', name: 'Red Sea Crossing', lat: 27.9844, lng: 33.8117, note: 'Israel crossed by God\'s power.', era: 'Exodus' },
  { id: 'kadesh', name: 'Kadesh-Barnea', lat: 30.5583, lng: 34.5417, note: 'Israel camped 38 years in the wilderness.', era: 'Exodus' },
  { id: 'jericho', name: 'Jericho', lat: 31.8669, lng: 35.4572, note: 'First city conquered by Joshua.', era: 'Exodus' },
  { id: 'shiloh', name: 'Shiloh', lat: 32.0617, lng: 35.2833, note: 'Tabernacle rested here for centuries.', era: 'Exodus' },
  { id: 'jerusalem', name: 'Jerusalem', lat: 31.7683, lng: 35.2133, note: 'City of David, Temple Mount, crucifixion site.', era: 'Monarchy' },
  { id: 'bethlehem', name: 'Bethlehem', lat: 31.7054, lng: 35.2026, note: 'Birthplace of David and Jesus.', era: 'Monarchy' },
  { id: 'gibeon', name: 'Gibeon', lat: 31.8472, lng: 35.1844, note: 'Solomon received wisdom here in a dream.', era: 'Monarchy' },
  { id: 'samaria', name: 'Samaria', lat: 32.2789, lng: 35.2097, note: 'Capital of the Northern Kingdom.', era: 'Monarchy' },
  { id: 'nineveh', name: 'Nineveh', lat: 36.3497, lng: 43.1561, note: 'Jonah preached to this Assyrian capital.', era: 'Exile' },
  { id: 'babylon', name: 'Babylon', lat: 32.5422, lng: 44.4228, note: 'Judah spent 70 years in exile here.', era: 'Exile' },
  { id: 'susa', name: 'Susa', lat: 32.1947, lng: 48.2578, note: 'Esther and Daniel served in this Persian capital.', era: 'Exile' },
  { id: 'ezra-jerusalem', name: 'Jerusalem (Restoration)', lat: 31.7683, lng: 35.2133, note: 'Ezra and Nehemiah rebuilt the walls and temple.', era: 'Exile' },
  { id: 'nazareth', name: 'Nazareth', lat: 32.7021, lng: 35.2978, note: 'Jesus grew up here.', era: 'Gospel' },
  { id: 'capernaum', name: 'Capernaum', lat: 32.8810, lng: 35.5750, note: 'Jesus\' ministry headquarters in Galilee.', era: 'Gospel' },
  { id: 'galilee', name: 'Sea of Galilee', lat: 32.8333, lng: 35.5833, note: 'Jesus walked on water and called fishermen here.', era: 'Gospel' },
  { id: 'jordan', name: 'Jordan River', lat: 31.8372, lng: 35.5489, note: 'John the Baptist baptized Jesus here.', era: 'Gospel' },
  { id: 'calvary', name: 'Golgotha', lat: 31.7784, lng: 35.2297, note: 'The crucifixion site.', era: 'Gospel' },
  { id: 'antioch', name: 'Antioch', lat: 36.2066, lng: 36.1572, note: 'First Gentile church and Paul\'s base.', era: 'Apostolic' },
  { id: 'damascus', name: 'Damascus', lat: 33.5138, lng: 36.2765, note: 'Paul met the risen Christ on this road.', era: 'Apostolic' },
  { id: 'rome', name: 'Rome', lat: 41.9028, lng: 12.4964, note: 'Paul wrote epistles under house arrest here.', era: 'Apostolic' },
  { id: 'ephesus', name: 'Ephesus', lat: 37.9394, lng: 27.3417, note: 'A major center of early Christianity.', era: 'Apostolic' },
  { id: 'corinth', name: 'Corinth', lat: 37.9380, lng: 22.9709, note: 'Paul established a church here.', era: 'Apostolic' },
  { id: 'patmos', name: 'Patmos', lat: 37.3310, lng: 26.5460, note: 'John received the Revelation here.', era: 'Apostolic' },
];

export interface JourneyRoute {
  id: string;
  name: string;
  locationIds: string[];
  color: string;
  era: BiblicalEra;
}

export const JOURNEY_ROUTES: JourneyRoute[] = [
  { id: 'abraham', name: 'Abraham\'s Journey', locationIds: ['ur', 'harran', 'shechem', 'bethel', 'hebron', 'beersheba'], color: '#C5A059', era: 'Patriarchal' },
  { id: 'exodus', name: 'The Exodus', locationIds: ['egypt', 'red-sea', 'sinai', 'kadesh', 'jericho'], color: '#8B6914', era: 'Exodus' },
  { id: 'paul-first', name: 'Paul\'s First Mission', locationIds: ['antioch', 'damascus', 'jerusalem'], color: '#6B4226', era: 'Apostolic' },
  { id: 'jesus-ministry', name: 'Jesus\' Ministry', locationIds: ['nazareth', 'capernaum', 'galilee', 'jordan', 'jerusalem', 'calvary'], color: '#B8860B', era: 'Gospel' },
];

export interface LocationRef {
  chapterIndex: number;
  locationIds: string[];
}

export const CHAPTER_LOCATIONS: LocationRef[] = [
  { chapterIndex: 0, locationIds: ['ur'] },
  { chapterIndex: 11, locationIds: ['harran', 'shechem'] },
  { chapterIndex: 22, locationIds: ['bethel'] },
  { chapterIndex: 35, locationIds: ['hebron'] },
  { chapterIndex: 46, locationIds: ['beersheba'] },
  { chapterIndex: 62, locationIds: ['egypt'] },
  { chapterIndex: 75, locationIds: ['egypt', 'red-sea'] },
  { chapterIndex: 90, locationIds: ['sinai'] },
  { chapterIndex: 130, locationIds: ['kadesh'] },
  { chapterIndex: 155, locationIds: ['jericho'] },
  { chapterIndex: 170, locationIds: ['shiloh'] },
  { chapterIndex: 220, locationIds: ['jerusalem', 'bethlehem'] },
  { chapterIndex: 250, locationIds: ['gibeon'] },
  { chapterIndex: 280, locationIds: ['samaria'] },
  { chapterIndex: 600, locationIds: ['nineveh'] },
  { chapterIndex: 650, locationIds: ['babylon'] },
  { chapterIndex: 700, locationIds: ['susa'] },
  { chapterIndex: 750, locationIds: ['ezra-jerusalem'] },
  { chapterIndex: 850, locationIds: ['nazareth'] },
  { chapterIndex: 870, locationIds: ['capernaum', 'galilee'] },
  { chapterIndex: 890, locationIds: ['jordan'] },
  { chapterIndex: 920, locationIds: ['jerusalem', 'calvary'] },
  { chapterIndex: 950, locationIds: ['antioch', 'damascus'] },
  { chapterIndex: 970, locationIds: ['corinth'] },
  { chapterIndex: 1000, locationIds: ['rome'] },
  { chapterIndex: 1050, locationIds: ['ephesus'] },
  { chapterIndex: 1185, locationIds: ['patmos'] },
];

export function getLocationsForChapter(chapterIndex: number): MapLocation[] {
  const ref = CHAPTER_LOCATIONS.find((l) => l.chapterIndex === chapterIndex);
  if (!ref) return [];
  return ref.locationIds
    .map((id) => MAP_LOCATIONS.find((l) => l.id === id))
    .filter((l): l is MapLocation => l !== undefined);
}

export function getRoutesForEra(era: BiblicalEra): JourneyRoute[] {
  return JOURNEY_ROUTES.filter((r) => r.era === era);
}
