export interface LexiconEntry {
  strongNumber: string;
  originalScript: string;
  transliteration: string;
  literalTranslation: string;
  context: string;
  rootDefinition: string;
  translationalNuances: string;
  language: 'Hebrew' | 'Greek';
  englishWord: string;
}

/**
 * Pre-bundled public-domain Strong's Concordance Lexicon data.
 * Contains key theological, linguistic, and culturally significant words
 * from both Old Testament (Hebrew) and New Testament (Greek).
 * Strong's Concordance is in the public domain.
 */

export const LEXICON_ENTRIES: LexiconEntry[] = [
  {
    strongNumber: 'H7225',
    originalScript: 'רֵאשִׁית',
    transliteration: 'reshit',
    literalTranslation: 'beginning, first, choicest part',
    context: 'Used in Genesis 1:1 to denote the absolute beginning of creation. In Hebrew thought, this word implies not just a starting point but the first and best of all that follows.',
    rootDefinition: 'From H7218 (rosh) meaning head, chief, or first. Conveys the idea of the primary or choicest portion.',
    translationalNuances: 'Translated as "beginning" in most English Bibles, but carries undertones of priority, excellence, and firstfruits. The Septuagint translates it as ἀρχή (archē), linking to the Greek concept of origin and first principle.',
    language: 'Hebrew',
    englishWord: 'beginning',
  },
  {
    strongNumber: 'H430',
    originalScript: 'אֱלֹהִים',
    transliteration: 'Elohim',
    literalTranslation: 'God, gods, divine ones',
    context: 'The most common name for God in the Old Testament, used over 2,600 times. The plural form with singular verbs suggests the majesty and fullness of the divine nature.',
    rootDefinition: 'Plural of H433 (eloah), derived from a root meaning to be strong, to be in front, or to fear/revere.',
    translationalNuances: 'The plural form has been understood by early Christian commentators as hinting at the Trinity. Jewish scholarship typically reads it as a plural of majesty or intensity. Syriac tradition renders it as ܐܠܗܐ (Alaha), the same word Jesus would have spoken.',
    language: 'Hebrew',
    englishWord: 'God',
  },
  {
    strongNumber: 'H7253',
    originalScript: 'בָּרָא',
    transliteration: 'bara',
    literalTranslation: 'to create, to shape, to fashion',
    context: 'Used exclusively of divine creation in the Old Testament — only God is the subject of this verb. It implies creating something entirely new, not merely reshaping existing material.',
    rootDefinition: 'A primitive root meaning to create, cut down, or dispatch. The essential idea is bringing something into existence that did not exist before.',
    translationalNuances: 'Unlike other Hebrew words for making (asah) or forming (yatsar), bara always denotes divine creative activity. The Syriac Peshitta uses ܒܪܐ (bara) with the same exclusive divine connotation.',
    language: 'Hebrew',
    englishWord: 'created',
  },
  {
    strongNumber: 'H3068',
    originalScript: 'יְהֹוָה',
    transliteration: 'YHWH / Yahweh',
    literalTranslation: 'the self-existent One, I AM',
    context: 'The personal covenant name of God, revealed to Moses at the burning bush (Exodus 3:14). Considered too sacred to pronounce in Jewish tradition, replaced with Adonai in reading.',
    rootDefinition: 'From H1961 (hayah), meaning to be, to exist, to become. The divine name signifies eternal, self-existent being.',
    translationalNuances: 'Rendered as LORD (all caps) in most English translations. The Septuagint translates it as κύριος (kyrios). Syriac tradition uses ܡܪܝܐ (Marya), combining Lord with the divine name, a term deeply embedded in Maronite and Syriac liturgy.',
    language: 'Hebrew',
    englishWord: 'LORD',
  },
  {
    strongNumber: 'H539',
    originalScript: 'אָמַן',
    transliteration: 'aman',
    literalTranslation: 'to believe, to trust, to be faithful, to confirm',
    context: 'The root word behind "amen" and "faith" in Hebrew thought. Used in Genesis 15:6 where Abraham "believed" God. Carries the sense of firmness, certainty, and reliability.',
    rootDefinition: 'A primitive root meaning to build up, to support, to render firm. The noun form (emunah) means faithfulness or steadfastness.',
    translationalNuances: 'Translated variously as "believed," "trusted," or "had faith." The Septuagint uses ἐπίστευσεν (episteusen), from which we get "epistemology." The Syriac ܗܝܡܢ (heyman) preserves the same Semitic root, showing the deep continuity of faith language across Aramaic-speaking Christianity.',
    language: 'Hebrew',
    englishWord: 'believed',
  },
  {
    strongNumber: 'H2617',
    originalScript: 'חֶסֶד',
    transliteration: 'chesed',
    literalTranslation: 'lovingkindness, covenant loyalty, steadfast love',
    context: 'One of the richest theological concepts in the Old Testament. Appears over 250 times, most famously in Psalm 23:6. Combines love with covenantal obligation — it is love that commits itself regardless of the recipient\'s worthiness.',
    rootDefinition: 'From H2616 (chasad), meaning to be good, kind, merciful. The word encompasses mercy, love, grace, and loyalty in a single concept.',
    translationalNuances: 'No single English word captures its fullness. Translated as "mercy," "lovingkindness," "steadfast love," or "covenant love." The Septuagint uses ἔλεος (eleos). Syriac renders it ܛܝܒܘܬܐ (taybuta), meaning goodness and grace.',
    language: 'Hebrew',
    englishWord: 'lovingkindness',
  },
  {
    strongNumber: 'H7307',
    originalScript: 'רוּחַ',
    transliteration: 'ruach',
    literalTranslation: 'spirit, wind, breath',
    context: 'Appears in Genesis 1:2 where the Spirit of God moves over the waters. The same word means wind and breath, reflecting the invisible yet powerful nature of the Spirit.',
    rootDefinition: 'From H7306 (ruach), meaning to breathe, to smell, to perceive. The word connects breath, wind, and spirit as manifestations of life force.',
    translationalNuances: 'Translated as "Spirit," "wind," or "breath" depending on context. The Septuagint uses πνεῦμα (pneuma), which carries the same triple meaning. Syriac ܪܘܚܐ (rukha) preserves this semantic unity.',
    language: 'Hebrew',
    englishWord: 'spirit',
  },
  {
    strongNumber: 'H5315',
    originalScript: 'נֶפֶשׁ',
    transliteration: 'nephesh',
    literalTranslation: 'soul, living being, life, self',
    context: 'Used in Genesis 2:7 when God breathed into Adam and he became a "living soul." Does not denote a separable immaterial part of a person but rather the whole living being.',
    rootDefinition: 'From H5314 (naphash), meaning to breathe, to be breathed upon. The essential idea is a breathing creature — the life principle itself.',
    translationalNuances: 'Often translated "soul," but Hebrew thought does not divide body and soul as Greek philosophy does. The Septuagint uses ψυχή (psyche). Syriac ܢܦܫܐ (nafsha) maintains the holistic Semitic understanding of personhood.',
    language: 'Hebrew',
    englishWord: 'soul',
  },
  {
    strongNumber: 'G3056',
    originalScript: 'λόγος',
    transliteration: 'logos',
    literalTranslation: 'word, reason, divine expression',
    context: 'Central to John 1:1 — "In the beginning was the Word." In Greek philosophy, logos referred to the rational principle governing the universe. John identifies this cosmic Word with Christ.',
    rootDefinition: 'From G3004 (lego), meaning to speak, to say. The word encompasses speech, reason, computation, and the divine organizing principle of the cosmos.',
    translationalNuances: 'Translated as "Word" in English, but carries philosophical depth from Heraclitus and the Stoics. The Syriac Peshitta renders it ܡܠܬܐ (meltha), meaning both word and manifestation, a term rich in Syriac theological tradition. The Maronite liturgy invokes the Meltha as the divine Word made flesh.',
    language: 'Greek',
    englishWord: 'Word',
  },
  {
    strongNumber: 'G5547',
    originalScript: 'Χριστός',
    transliteration: 'Christos',
    literalTranslation: 'Anointed One, Messiah',
    context: 'The Greek translation of the Hebrew Mashiach (Messiah). Used over 500 times in the New Testament. Signifies Jesus as the divinely appointed and anointed king and deliverer.',
    rootDefinition: 'From G5548 (chrio), meaning to anoint, to consecrate by applying oil. The anointed one was set apart for a sacred purpose.',
    translationalNuances: 'Christ is not a surname but a title — "Jesus the Christ." The Syriac ܡܫܝܚܐ (Mshikha) is the same word used in Syriac liturgy for the Anointed One, from which the term "Christian" (ܡܫܝܚܝܐ, Mshikhaya) derives.',
    language: 'Greek',
    englishWord: 'Christ',
  },
  {
    strongNumber: 'G4151',
    originalScript: 'πνεῦμα',
    transliteration: 'pneuma',
    literalTranslation: 'spirit, wind, breath',
    context: 'Used throughout the New Testament for the Holy Spirit, human spirit, and spiritual beings. In John 3:8, Jesus plays on the double meaning of wind/spirit. The Septuagint\'s translation of Hebrew ruach.',
    rootDefinition: 'From G4154 (pneo), meaning to breathe, to blow. A current of air, breeze, or the vital principle of life.',
    translationalNuances: 'Translated as "Spirit" (when capitalized, referring to the Holy Spirit) or "spirit" (for other uses). Syriac ܪܘܚܐ (rukha) carries the identical semantic range as its Hebrew cognate ruach, demonstrating the unbroken Semitic theological tradition.',
    language: 'Greek',
    englishWord: 'spirit',
  },
  {
    strongNumber: 'G2424',
    originalScript: 'Ἰησοῦς',
    transliteration: 'Iēsous',
    literalTranslation: 'YHWH saves, Yahweh is salvation',
    context: 'The Greek form of the Hebrew Yeshua (Joshua). Given by divine command in Matthew 1:21 — "you shall call his name Jesus, for he will save his people from their sins."',
    rootDefinition: 'From Hebrew H3091 (Yehoshua), a compound of YHWH (H3068) and yasha (H3467, to save). The name itself is a theological statement: God saves.',
    translationalNuances: 'The Aramaic/Syriac form ܝܫܘܥ (Isho) is the name used in the Peshitta and Syriac liturgical tradition. It preserves the same meaning — the Lord is salvation. The name connects Jesus to the Old Testament figure Joshua, who led God\'s people into the promised land.',
    language: 'Greek',
    englishWord: 'Jesus',
  },
  {
    strongNumber: 'G2316',
    originalScript: 'θεός',
    transliteration: 'theos',
    literalTranslation: 'God, deity, the divine',
    context: 'The standard Greek word for God in the New Testament, used over 1,300 times. In John 1:1, the Word was with God and was God — using theos both with and without the article to express distinction and unity.',
    rootDefinition: 'From an uncertain root. In Hellenistic usage, theos referred to any deity, but the New Testament writers use it almost exclusively for the one true God.',
    translationalNuances: 'The Syriac ܐܠܗܐ (Alaha) is the direct cognate of Hebrew Elohim and is the word Jesus and the early church would have spoken. The Maronite and Syriac tradition preserves this Aramaic term in liturgy to this day.',
    language: 'Greek',
    englishWord: 'God',
  },
  {
    strongNumber: 'G26',
    originalScript: 'ἀγάπη',
    transliteration: 'agape',
    literalTranslation: 'love, selfless covenant love',
    context: 'The highest form of love in Greek — sacrificial, unconditional love. Used in John 3:16 and throughout the New Testament to describe God\'s love. Rare in secular Greek literature, elevated by Christian usage.',
    rootDefinition: 'Perhaps from agapao (G25), meaning to love. Distinct from eros (romantic love) and philia (friendship love), agape is love that gives without expecting return.',
    translationalNuances: 'Sometimes translated "charity" in older English. The Syriac ܚܘܒܐ (hubba) captures the same self-giving love. In Syriac mystical tradition, hubba is the divine energy that draws all creation back to its Source.',
    language: 'Greek',
    englishWord: 'love',
  },
  {
    strongNumber: 'G5485',
    originalScript: 'χάρις',
    transliteration: 'charis',
    literalTranslation: 'grace, favor, undeserved kindness',
    context: 'Central to Paul\'s theology — "by grace you have been saved" (Ephesians 2:8). Represents God\'s unmerited favor toward humanity. Appears over 150 times in the New Testament.',
    rootDefinition: 'From G5463 (chairo), meaning to rejoice. The root idea is that which causes joy, hence favor, goodwill, and graciousness.',
    translationalNuances: 'Translated as "grace" in most contexts. The Syriac ܛܝܒܘܬܐ (taybuta) is the same word used for Hebrew chesed, linking the New Testament concept of grace directly to the Old Testament covenant love.',
    language: 'Greek',
    englishWord: 'grace',
  },
  {
    strongNumber: 'G4102',
    originalScript: 'πίστις',
    transliteration: 'pistis',
    literalTranslation: 'faith, trust, belief, faithfulness',
    context: 'Used over 240 times in the New Testament. In Hebrews 11:1, "faith is the assurance of things hoped for, the conviction of things not seen." The Septuagint\'s translation of Hebrew emunah.',
    rootDefinition: 'From G3982 (peitho), meaning to persuade, to trust. The word implies both belief and the trust that flows from being persuaded.',
    translationalNuances: 'The Syriac ܗܝܡܢܘܬܐ (haymanuta) derives from the same Semitic root as Hebrew aman, showing the continuity of faith language from Old to New Testament in the Aramaic-speaking church.',
    language: 'Greek',
    englishWord: 'faith',
  },
  {
    strongNumber: 'G932',
    originalScript: 'βασιλεία',
    transliteration: 'basileia',
    literalTranslation: 'kingdom, reign, royal dominion',
    context: 'Central to Jesus\' preaching — "the kingdom of God is at hand" (Mark 1:15). Not merely a territory but the active reign and rule of God breaking into history.',
    rootDefinition: 'From G935 (basileus), meaning king. The abstract noun denotes kingship, sovereignty, and the exercise of royal authority.',
    translationalNuances: 'Often "kingdom of God" or "kingdom of heaven" (Matthew\'s preferred term). The Syriac ܡܠܟܘܬܐ (malkuta) is used in Syriac liturgy for both the earthly and heavenly kingdom, reflecting the already/not-yet tension of New Testament eschatology.',
    language: 'Greek',
    englishWord: 'kingdom',
  },
  {
    strongNumber: 'G166',
    originalScript: 'αἰώνιος',
    transliteration: 'aiōnios',
    literalTranslation: 'eternal, everlasting, age-long',
    context: 'Used in John 3:16 — "eternal life." Not merely endless time but life of the age to come, the divine quality of life that belongs to God\'s realm.',
    rootDefinition: 'From G165 (aiōn), meaning an age, a period of time. The adjective describes that which belongs to or lasts through the ages.',
    translationalNuances: 'Translated as "eternal" or "everlasting." The Syriac ܥܠܡܝܐ (almaya) connects to the Semitic root olam (Hebrew H5769), meaning hidden or beyond the horizon — that which transcends temporal limits.',
    language: 'Greek',
    englishWord: 'eternal',
  },
];

const lexiconByEnglishWord = new Map<string, LexiconEntry[]>();

LEXICON_ENTRIES.forEach((entry) => {
  const key = entry.englishWord.toLowerCase();
  if (!lexiconByEnglishWord.has(key)) {
    lexiconByEnglishWord.set(key, []);
  }
  lexiconByEnglishWord.get(key)!.push(entry);
});

export function findLexiconEntriesForWord(word: string): LexiconEntry[] {
  const lower = word.toLowerCase().replace(/[^a-z]/g, '');
  const matches: LexiconEntry[] = [];

  for (const [key, entries] of lexiconByEnglishWord) {
    if (key === lower || key.includes(lower) || lower.includes(key)) {
      matches.push(...entries);
    }
  }

  return matches;
}

export function findLexiconByStrongNumber(strongNumber: string): LexiconEntry | null {
  return LEXICON_ENTRIES.find((e) => e.strongNumber === strongNumber) || null;
}

export function getAllLexiconEntries(): LexiconEntry[] {
  return LEXICON_ENTRIES;
}
