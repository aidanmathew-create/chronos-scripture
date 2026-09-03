import { useState, useMemo } from 'react';
import { getChapterHermeneutics } from '@/services/hermeneuticsService';
import { ChronologicalEntry } from '@/data/chronologicalPlan';
import {
  X,
  ScrollText,
  Search,
  Link2,
  Globe,
  Loader2,
  BookOpen,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface HermeneuticsDrawerProps {
  entry: ChronologicalEntry;
  isOpen: boolean;
  onClose: () => void;
  onCrossRefClick: (bookId: string, chapter: number) => void;
}

type TabId = 'context' | 'insights' | 'crossrefs';

interface LiveInsight {
  title: string;
  snippet: string;
  url: string;
  source: string;
}

export function HermeneuticsDrawer({
  entry,
  isOpen,
  onClose,
  onCrossRefClick,
}: HermeneuticsDrawerProps) {
  const [activeTab, setActiveTab] = useState<TabId>('context');
  const [insights, setInsights] = useState<LiveInsight[]>([]);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [insightError, setInsightError] = useState<string | null>(null);
  const [hasFetched, setHasFetched] = useState(false);

  const hermeneutics = useMemo(
    () => getChapterHermeneutics(entry.bookId, entry.chapter),
    [entry.bookId, entry.chapter],
  );

  const relevantCrossRefs = hermeneutics.crossReferences;

  async function fetchLiveInsights() {
    setLoadingInsights(true);
    setInsightError(null);
    setInsights([]);
    setHasFetched(true);

    const queries = [
      `${entry.bookName} ${entry.chapter} Syriac commentary patristic`,
      `${entry.bookName} ${entry.chapter} early church fathers interpretation`,
      `${entry.bookName} ${entry.chapter} historical context biblical exegesis`,
    ];

    try {
      const allInsights: LiveInsight[] = [];

      for (const query of queries) {
        const url = `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_GOOGLE_SEARCH_API_KEY || ''}&cx=${import.meta.env.VITE_GOOGLE_SEARCH_CX || ''}&q=${encodeURIComponent(query)}`;

        try {
          const resp = await fetch(url);
          if (resp.ok) {
            const data = await resp.json();
            if (data.items) {
              for (const item of data.items.slice(0, 3)) {
                allInsights.push({
                  title: item.title,
                  snippet: item.snippet,
                  url: item.link,
                  source: item.displayLink,
                });
              }
            }
          }
        } catch {
          // continue to next query
        }
      }

      if (allInsights.length === 0) {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(`${entry.bookName} ${entry.chapter} biblical commentary`)}&format=json&origin=*`;
        const wikiResp = await fetch(searchUrl);
        if (wikiResp.ok) {
          const wikiData = await wikiResp.json();
          if (wikiData.query?.search) {
            for (const result of wikiData.query.search.slice(0, 5)) {
              allInsights.push({
                title: result.title,
                snippet: result.snippet.replace(/<[^>]+>/g, ''),
                url: `https://en.wikipedia.org/wiki/${encodeURIComponent(result.title.replace(/ /g, '_'))}`,
                source: 'wikipedia.org',
              });
            }
          }
        }
      }

      if (allInsights.length === 0) {
        setInsightError(
          'Unable to fetch live insights. This feature requires an internet connection and a configured Google Custom Search API key. You can still search manually for patristic commentary on this chapter.',
        );
      } else {
        setInsights(allInsights);
      }
    } catch {
      setInsightError(
        'Unable to fetch live insights. Please check your internet connection.',
      );
    } finally {
      setLoadingInsights(false);
    }
  }

  function parseReference(ref: string): { bookAbbr: string; chapter: number } | null {
    const match = ref.match(/^(\d*\s*\w+)\s+(\d+)/);
    if (!match) return null;
    const bookAbbr = match[1].trim();
    const chapter = parseInt(match[2], 10);
    return { bookAbbr, chapter };
  }

  function handleCrossRefClick(ref: string) {
    const parsed = parseReference(ref);
    if (!parsed) return;
    onCrossRefClick(parsed.bookAbbr, parsed.chapter);
  }

  if (!isOpen) return null;

  const tabs: { id: TabId; label: string; icon: typeof ScrollText }[] = [
    { id: 'context', label: 'Context', icon: ScrollText },
    { id: 'insights', label: 'Insights', icon: Search },
    { id: 'crossrefs', label: 'Cross-Refs', icon: Link2 },
  ];

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 animate-slide-in-right">
        <div className="h-full illuminated-container flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gold-300/30">
            <h3
              className="text-lg font-semibold burgundy-text dark:text-gold-200"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Hermeneutics
            </h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-ink-200/60 hover:text-burgundy-200 hover:bg-parchment-200/30 dark:text-parchment-200/60 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex border-b border-gold-300/20">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'tab-active'
                      : 'text-ink-200/50 dark:text-parchment-200/50 hover:text-ink-200/70'
                  }`}
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  <Icon size={15} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {activeTab === 'context' && (
              <div className="space-y-5 animate-fade-in">
                <>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={16} className="text-gold-600 dark:text-gold-300" />
                      <h4 className="text-sm uppercase tracking-wide text-gold-600 dark:text-gold-300 font-semibold">
                        Historical Era
                      </h4>
                    </div>
                    <p className="text-ink-200/80 dark:text-parchment-200/80 text-sm leading-relaxed">
                      {hermeneutics.historicalContext}
                    </p>
                  </div>

                  <div className="ornamental-divider">
                    <Sparkles size={14} />
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-gold-600 dark:text-gold-300 font-semibold mb-2">
                      Theological Notes
                    </h4>
                    <ul className="space-y-2">
                      {hermeneutics.theologicalNotes.map((note, i) => (
                        <li
                          key={i}
                          className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed pl-4 border-l-2 border-gold-300/40"
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-gold-600 dark:text-gold-300 font-semibold mb-2">
                      Linguistic Notes
                    </h4>
                    <ul className="space-y-2">
                      {hermeneutics.linguisticNotes.map((note, i) => (
                        <li
                          key={i}
                          className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed pl-4 border-l-2 border-gold-300/40"
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-gold-600 dark:text-gold-300 font-semibold mb-2">
                      OT to NT Typology
                    </h4>
                    <ul className="space-y-2">
                      {hermeneutics.typology.map((note, i) => (
                        <li
                          key={i}
                          className="text-sm text-ink-200/80 dark:text-parchment-200/80 leading-relaxed pl-4 border-l-2 border-burgundy-200/40"
                        >
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              </div>
            )}

            {activeTab === 'insights' && (
              <div className="space-y-4 animate-fade-in">
                <div className="text-center">
                  <button
                    onClick={fetchLiveInsights}
                    disabled={loadingInsights}
                    className="btn-gold px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 mx-auto"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {loadingInsights ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Globe size={18} />
                        Fetch Live Insights
                      </>
                    )}
                  </button>
                  <p className="text-xs text-ink-200/40 dark:text-parchment-200/40 mt-2">
                    Searches for Syriac & patristic commentary, Church Fathers insights, and historical context.
                    Requires internet.
                  </p>
                </div>

                {insightError && (
                  <div className="text-sm text-burgundy-300 dark:text-burgundy-600 bg-burgundy-50/20 dark:bg-burgundy-100/10 p-3 rounded-lg border border-burgundy-200/20">
                    {insightError}
                  </div>
                )}

                {insights.length > 0 && (
                  <div className="space-y-3">
                    {insights.map((insight, i) => (
                      <a
                        key={i}
                        href={insight.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-lg border border-gold-300/30 hover:border-gold-300/60 bg-parchment-50/50 dark:bg-ink-100/30 transition-all hover:shadow-md group"
                      >
                        <div className="text-sm font-semibold burgundy-text dark:text-gold-200 group-hover:text-burgundy-300">
                          {insight.title}
                        </div>
                        <p className="text-xs text-ink-200/60 dark:text-parchment-200/60 mt-1 leading-relaxed">
                          {insight.snippet}
                        </p>
                        <div className="text-xs text-gold-600 dark:text-gold-300 mt-1.5 flex items-center gap-1">
                          {insight.source}
                          <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {!hasFetched && !loadingInsights && (
                  <div className="text-center py-8">
                    <Globe size={32} className="mx-auto text-gold-300/40 mb-3" />
                    <p className="text-sm text-ink-200/50 dark:text-parchment-200/50 italic">
                      Click "Fetch Live Insights" to search the web for patristic commentary and historical context on this chapter.
                    </p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'crossrefs' && (
              <div className="space-y-3 animate-fade-in">
                {relevantCrossRefs.length > 0 ? (
                  relevantCrossRefs.map((cr, i) => (
                    <button
                      key={i}
                      onClick={() => handleCrossRefClick(cr.from)}
                      className="w-full text-left p-3 rounded-lg border border-gold-300/30 hover:border-gold-300/60 bg-parchment-50/50 dark:bg-ink-100/30 transition-all hover:shadow-md group"
                    >
                      <div className="flex items-start gap-2">
                        <Link2 size={14} className="text-gold-600 dark:text-gold-300 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold burgundy-text dark:text-gold-200">
                            {cr.from} <ArrowRight size={12} className="inline mx-1" /> {cr.to}
                          </div>
                          <p className="text-xs text-ink-200/60 dark:text-parchment-200/60 mt-1">
                            {cr.note}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-ink-200/50 dark:text-parchment-200/50 italic text-center py-8">
                    No cross-references loaded for this chapter yet.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
