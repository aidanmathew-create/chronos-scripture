import { BIBLE_BOOKS, BOOK_MAP, BiblicalEra, BibleBook } from '@/data/bibleBooks';

export interface ChapterHermeneutics {
  bookId: string;
  bookName: string;
  chapter: number;
  era: BiblicalEra;
  historicalContext: string;
  theologicalNotes: string[];
  linguisticNotes: string[];
  crossReferences: { from: string; to: string; note: string }[];
  typology: string[];
}

const BOOK_THEMES: Record<string, string> = {
  GEN: 'creation, fall, and the patriarchal covenant',
  EXO: 'redemption through blood and the giving of the Law',
  LEV: 'holiness, priesthood, and sacrificial atonement',
  NUM: 'wilderness testing and covenant faithfulness',
  DEU: 'covenant renewal and the call to exclusive loyalty',
  JOS: 'inheritance, conquest, and covenant fulfillment',
  JDG: 'the cycle of sin, deliverance, and the need for a king',
  RUT: 'covenant loyalty and the Davidic lineage',
  '1SA': 'the transition from judges to monarchy',
  '2SA': 'the Davidic kingdom and the eternal covenant',
  '1KI': 'wisdom, temple, and the divided kingdom',
  '2KI': 'exile, prophetic witness, and covenant curse',
  '1CH': 'genealogical identity and worship-centered kingship',
  '2CH': 'temple worship, reform, and the path to exile',
  EZR: 'return from exile and covenant recommitment',
  NEH: 'rebuilding, reform, and covenant renewal',
  EST: 'providence and God\'s people in a pagan court',
  JOB: 'suffering, wisdom, and the sovereignty of God',
  PSA: 'prayer, praise, lament, and messianic hope',
  PRO: 'practical wisdom and the fear of the Lord',
  ECC: 'the vanity of life under the sun and the fear of God',
  SNG: 'covenant love as a picture of God and His people',
  ISA: 'judgment, the Suffering Servant, and glorious restoration',
  JER: 'covenant indictment and the promise of a new covenant',
  LAM: 'grief over judgment and the faithfulness of God',
  EZK: 'glory departing and returning, and the hope of resurrection',
  DAN: 'faithfulness in exile and the coming eternal kingdom',
  HOS: 'covenant adultery and God\'s redeeming love',
  JOL: 'the Day of the Lord and the outpoured Spirit',
  AMO: 'justice, righteousness, and the coming judgment',
  OBA: 'pride, judgment, and the coming kingdom',
  JON: 'God\'s mercy to the nations and reluctant prophets',
  MIC: 'judgment, the promised ruler from Bethlehem, and covenant loyalty',
  NAM: 'the fall of Nineveh and God\'s justice',
  HAB: 'faith, judgment, and the righteous living by faith',
  ZEP: 'the Day of the Lord and a remnant saved',
  HAG: 'priorities, the rebuilt temple, and future glory',
  ZEC: 'visions of restoration and the coming King-Priest',
  MAL: 'covenant faithfulness, worship, and the coming messenger',
  MAT: 'Jesus as the promised Messiah and the Kingdom of Heaven',
  MRK: 'Jesus the suffering servant and the cross as the path to glory',
  LUK: 'Jesus as Savior of the lost and the Spirit-empowered mission',
  JHN: 'Jesus as the divine Word and the source of eternal life',
  ACT: 'the Spirit-empowered church and the gospel to all nations',
  ROM: 'justification by faith and life in the Spirit',
  '1CO': 'church unity, holiness, and the wisdom of the cross',
  '2CO': 'suffering ministry and the sufficiency of Christ',
  GAL: 'freedom in Christ and the futility of works-righteousness',
  EPH: 'the cosmic mystery of Christ and His Church',
  PHP: 'joy, humility, and the mindset of Christ',
  COL: 'the supremacy of Christ and freedom from shadows',
  '1TH': 'hope in Christ\'s return and holy living',
  '2TH': 'the Day of the Lord and steadfastness',
  '1TI': 'church order, sound doctrine, and godliness',
  '2TI': 'faithful endurance and the entrusted gospel',
  TIT: 'grace, good works, and church order',
  PHM: 'reconciliation and the transforming power of the gospel',
  HEB: 'the supremacy of Christ over all shadows and types',
  JAS: 'practical faith, wisdom, and perseverance',
  '1PE': 'suffering, hope, and holy living as exiles',
  '2PE': 'growth in grace and the certainty of Christ\'s return',
  '1JN': 'love, light, and the assurance of eternal life',
  '2JN': 'truth, love, and the warning against deceivers',
  '3JN': 'hospitality, faithfulness, and the support of gospel workers',
  JUD: 'contending for the faith against apostasy',
  REV: 'the triumph of the Lamb and the coming of the New Creation',
};

const BOOK_LANGUAGES: Record<string, string[]> = {
  GEN: ['Hebrew', 'Semitic'],
  EXO: ['Hebrew', 'Semitic'],
  LEV: ['Hebrew', 'Semitic'],
  NUM: ['Hebrew', 'Semitic'],
  DEU: ['Hebrew', 'Semitic'],
  JOS: ['Hebrew', 'Semitic'],
  JDG: ['Hebrew', 'Semitic'],
  RUT: ['Hebrew', 'Semitic'],
  '1SA': ['Hebrew', 'Semitic'],
  '2SA': ['Hebrew', 'Semitic'],
  '1KI': ['Hebrew', 'Semitic'],
  '2KI': ['Hebrew', 'Semitic'],
  '1CH': ['Hebrew', 'Semitic'],
  '2CH': ['Hebrew', 'Semitic'],
  EZR: ['Hebrew', 'Aramaic'],
  NEH: ['Hebrew', 'Semitic'],
  EST: ['Hebrew', 'Semitic'],
  JOB: ['Hebrew', 'Semitic'],
  PSA: ['Hebrew', 'Semitic'],
  PRO: ['Hebrew', 'Semitic'],
  ECC: ['Hebrew', 'Semitic'],
  SNG: ['Hebrew', 'Semitic'],
  ISA: ['Hebrew', 'Semitic'],
  JER: ['Hebrew', 'Semitic'],
  LAM: ['Hebrew', 'Semitic'],
  EZK: ['Hebrew', 'Semitic'],
  DAN: ['Hebrew', 'Aramaic'],
  HOS: ['Hebrew', 'Semitic'],
  JOL: ['Hebrew', 'Semitic'],
  AMO: ['Hebrew', 'Semitic'],
  OBA: ['Hebrew', 'Semitic'],
  JON: ['Hebrew', 'Semitic'],
  MIC: ['Hebrew', 'Semitic'],
  NAM: ['Hebrew', 'Semitic'],
  HAB: ['Hebrew', 'Semitic'],
  ZEP: ['Hebrew', 'Semitic'],
  HAG: ['Hebrew', 'Semitic'],
  ZEC: ['Hebrew', 'Semitic'],
  MAL: ['Hebrew', 'Semitic'],
  MAT: ['Greek', 'Koine'],
  MRK: ['Greek', 'Koine'],
  LUK: ['Greek', 'Koine'],
  JHN: ['Greek', 'Koine'],
  ACT: ['Greek', 'Koine'],
  ROM: ['Greek', 'Koine'],
  '1CO': ['Greek', 'Koine'],
  '2CO': ['Greek', 'Koine'],
  GAL: ['Greek', 'Koine'],
  EPH: ['Greek', 'Koine'],
  PHP: ['Greek', 'Koine'],
  COL: ['Greek', 'Koine'],
  '1TH': ['Greek', 'Koine'],
  '2TH': ['Greek', 'Koine'],
  '1TI': ['Greek', 'Koine'],
  '2TI': ['Greek', 'Koine'],
  TIT: ['Greek', 'Koine'],
  PHM: ['Greek', 'Koine'],
  HEB: ['Greek', 'Koine'],
  JAS: ['Greek', 'Koine'],
  '1PE': ['Greek', 'Koine'],
  '2PE': ['Greek', 'Koine'],
  '1JN': ['Greek', 'Koine'],
  '2JN': ['Greek', 'Koine'],
  '3JN': ['Greek', 'Koine'],
  JUD: ['Greek', 'Koine'],
  REV: ['Greek', 'Apocalyptic'],
};

const ERA_DATE_RANGES: Record<BiblicalEra, string> = {
  Patriarchal: 'roughly 2000-1800 BC, during the Middle Bronze Age',
  Exodus: 'roughly 1446-1406 BC, during the Late Bronze Age',
  Monarchy: 'roughly 1050-586 BC, from the united kingdom to the divided kingdom',
  Exile: 'roughly 722-539 BC, spanning the Assyrian and Babylonian dominion',
  Gospel: 'roughly 4 BC-30 AD, during the Roman occupation of Judea',
  Apostolic: 'roughly 30-95 AD, across the Roman Empire',
};

const ERA_KEY_EVENTS: Record<BiblicalEra, string> = {
  Patriarchal: 'small city-states and tribal migrations across the Ancient Near East',
  Exodus: 'the dominance of Egypt\'s New Kingdom and the emergence of Israel as a nation',
  Monarchy: 'the rise of Israel\'s kings, the Temple, and the looming Assyrian threat',
  Exile: 'the fall of Samaria and Jerusalem, and the diaspora under Assyria and Babylon',
  Gospel: 'Roman rule under the Herodian dynasty and the prefecture of Pontius Pilate',
  Apostolic: 'the spread of Christianity from Jerusalem to Rome under Pax Romana',
};

const CHAPTER_SECTIONS: Record<string, string[]> = {
  GEN: ['Primeval History', 'The Call of Abraham', 'The Patriarchal Narratives', 'Joseph in Egypt'],
  EXO: ['Slavery and Deliverance', 'The Sinai Covenant', 'The Golden Calf', 'The Tabernacle Construction'],
  LEV: ['Burnt and Grain Offerings', 'Priestly Ordination', 'Clean and Unclean', 'The Day of Atonement', 'Holiness Code'],
  NUM: ['Census and Camp Order', 'Wilderness Wanderings', 'Rebellion and Judgment', 'Preparation for Conquest'],
  DEU: ['Moses\' First Discourse', 'Moses\' Second Discourse: Law', 'Moses\' Third Discourse: Covenant', 'Moses\' Final Blessing'],
  JOS: ['Entering the Land', 'Conquest of Canaan', 'Tribal Allotments', 'Joshua\'s Farewell'],
  JDG: ['The Cycle Begins', 'Major Judges', 'Minor Judges', 'Civil Chaos'],
  RUT: ['Naomi\'s Loss', 'Ruth and Boaz', 'Redemption and the Davidic Line'],
  '1SA': ['Samuel\'s Call', 'Saul\'s Rise', 'David Anointed', 'Saul\'s Decline'],
  '2SA': ['David Consolidates', 'The Davidic Covenant', 'David\'s Fall', 'Absalom\'s Rebellion'],
  '1KI': ['Solomon\'s Wisdom', 'The Temple Built', 'The Kingdom Divides', 'Elijah\'s Ministry'],
  '2KI': ['Elisha\'s Ministry', 'The Fall of Samaria', 'Judah\'s Reform', 'The Fall of Jerusalem'],
  '1CH': ['Genealogies', 'David\'s Rise', 'The Ark in Jerusalem', 'Temple Preparation'],
  '2CH': ['Solomon\'s Temple', 'The Divided Kingdom', 'Reform Kings', 'The Exile'],
  EZR: ['The Return', 'Rebuilding the Temple', 'Ezra\'s Mission', 'Covenant Renewal'],
  NEH: ['Rebuilding the Walls', 'Opposition', 'Covenant Renewal', 'Reforms'],
  EST: ['Esther Becomes Queen', 'Haman\'s Plot', 'Mordecai\'s Exaltation', 'Purim Established'],
  JOB: ['Job\'s Testing', 'Job\'s Laments', 'The Friends\' Arguments', 'God\'s Response'],
  PSA: ['Book I (Psalms of David)', 'Book II (Korah & Asaph)', 'Book III (Asaph)', 'Book IV (YHWH Kingship)', 'Book V (Praise & Pilgrimage)'],
  PRO: ['The Call to Wisdom', 'Solomon\'s Proverbs', 'Words of the Wise', 'Hezekiah\'s Collection', 'The Excellent Wife'],
  ECC: ['Vanity of Vanities', 'Wisdom and Folly', 'Time and Providence', 'The Conclusion: Fear God'],
  SNG: ['The Bride\'s Longing', 'The Courtship', 'The Wedding', 'Love Sealed'],
  ISA: ['Judgment on Judah', 'The Book of Immanuel', 'Oracles Against the Nations', 'The Suffering Servant', 'Restoration and New Creation'],
  JER: ['The Call and Early Warnings', 'Temple Sermons', 'Signs and Sufferings', 'The Fall of Jerusalem', 'Oracles Against the Nations'],
  LAM: ['The City Desolate', 'God\'s Anger', 'Personal Lament', 'The Siege Remembered', 'A Prayer for Restoration'],
  EZK: ['The Call and Vision', 'Symbolic Warnings', 'Judgment on Jerusalem', 'Oracles Against Nations', 'The Valley of Dry Bones', 'The New Temple'],
  DAN: ['Faithfulness in Babylon', 'Nebuchadnezzar\'s Dreams', 'The Fiery Furnace', 'The Writing on the Wall', 'Visions of the Kingdoms'],
  HOS: ['The Marriage Metaphor', 'Israel\'s Unfaithfulness', 'God\'s Redeeming Love', 'A Call to Return'],
  JOL: ['The Locust Plague', 'The Day of the Lord', 'The Outpoured Spirit'],
  AMO: ['Judgment on the Nations', 'Judgment on Israel', 'Social Injustice', 'The Coming Restoration'],
  OBA: ['Edom\'s Pride and Fall', 'The Day of the Lord'],
  JON: ['Flight from God', 'The Fish and Repentance', 'Nineveh Turns', 'God\'s Mercy and Jonah\'s Anger'],
  MIC: ['Judgment on Samaria and Jerusalem', 'Social Injustice Condemned', 'The Ruler from Bethlehem', 'God\'s Steadfast Love'],
  NAM: ['God\'s Jealousy', 'The Fall of Nineveh'],
  HAB: ['Habakkuk\'s Questions', 'The Just Shall Live by Faith', 'A Psalm of Trust'],
  ZEP: ['The Day of Judgment', 'Call to Repentance', 'The Remnant Restored'],
  HAG: ['The Call to Rebuild', 'The Glory of the New Temple'],
  ZEC: ['Night Visions', 'The Branch and the Priest-King', 'Oracles of Restoration', 'The Coming King'],
  MAL: ['God\'s Covenant Love', 'Corrupt Priests Rebuked', 'The Coming Messenger'],
  MAT: ['Birth and Preparation', 'The Sermon on the Mount', 'Miracles and Parables', 'Conflict with Religious Leaders', 'The Passion and Resurrection'],
  MRK: ['The Beginning of the Gospel', 'Galilean Ministry', 'The Way of the Cross', 'The Passion and Resurrection'],
  LUK: ['Birth Narratives', 'Galilean Ministry', 'The Journey to Jerusalem', 'The Passion and Resurrection', 'The Ascension'],
  JHN: ['The Word Incarnate', 'Signs and Discourses', 'The Upper Room', 'The Passion', 'The Risen Lord'],
  ACT: ['The Church in Jerusalem', 'The Gospel Spreads', 'Paul\'s First Journey', 'Paul in Macedonia & Achaia', 'Paul in Ephesus', 'Paul\'s Journey to Rome'],
  ROM: ['The Universal Need for Salvation', 'Justification by Faith', 'Life in the Spirit', 'Israel and the Gentiles', 'Practical Christian Living'],
  '1CO': ['Divisions and the Cross', 'Sexual Holiness', 'Worship and Spiritual Gifts', 'The Resurrection'],
  '2CO': ['Comfort in Suffering', 'The New Covenant Ministry', 'Generosity', 'Paul\'s Defense'],
  GAL: ['The True Gospel', 'Freedom from the Law', 'Life by the Spirit'],
  EPH: ['Our Identity in Christ', 'Unity of the Church', 'The Christian Household', 'Spiritual Warfare'],
  PHP: ['Joy in Suffering', 'The Mind of Christ', 'Pressing Toward the Goal', 'Contentment and Generosity'],
  COL: ['The Supremacy of Christ', 'Freedom from Shadows', 'The New Self', 'Christian Households'],
  '1TH': ['The Example of the Church', 'Holy Living', 'The Coming of the Lord'],
  '2TH': ['The Day of the Lord', 'Stand Firm', 'Exhortations'],
  '1TI': ['Sound Doctrine', 'Church Order', 'Qualifications for Leaders', 'Personal Instructions'],
  '2TI': ['Endurance in Ministry', 'A Workman Approved', 'The Last Days', 'Final Charge'],
  TIT: ['Elders and Sound Doctrine', 'Grace and Good Works', 'Final Instructions'],
  PHM: ['The Appeal for Onesimus'],
  HEB: ['The Supremacy of the Son', 'The High Priest After Melchizedek', 'The New Covenant', 'Faith\'s Hall of Fame', 'Exhortations'],
  JAS: ['Trials and Wisdom', 'Faith and Works', 'The Tongue', 'Patience and Prayer'],
  '1PE': ['Living Hope', 'Submission and Suffering', 'Shepherding and Standing Firm'],
  '2PE': ['Growth in Grace', 'False Teachers', 'The Day of the Lord'],
  '1JN': ['Walking in Light', 'Love One Another', 'Assurance of Eternal Life'],
  '2JN': ['Truth and Love', 'Warning Against Deceivers'],
  '3JN': ['Hospitality Commended', 'Diotrephes Rebuked'],
  JUD: ['Contend for the Faith'],
  REV: ['The Letters to the Churches', 'The Throne in Heaven', 'The Seals, Trumpets, and Bowls', 'Babylon Falls', 'The New Creation'],
};

const ERA_TYPOLOGY: Record<BiblicalEra, string[]> = {
  Patriarchal: [
    'Adam as a type of Christ — the first man brought death; the second Adam brings life (Rom 5:14).',
    'Noah\'s ark prefigures baptism and the Church as the vessel of salvation (1 Pet 3:20-21).',
    'Melchizedek, priest-king of Salem, foreshadows Christ\'s eternal priesthood (Heb 7).',
    'Abraham\'s seed points to Christ, the one seed through whom all nations are blessed (Gal 3:16).',
  ],
  Exodus: [
    'Moses as a type of Christ: prophet, mediator, deliverer, and intercessor (Deut 18:15).',
    'The Passover lamb without blemish prefigures Christ, our Passover (1 Cor 5:7).',
    'The rock struck for water is Christ, the source of living water (1 Cor 10:4).',
    'The Tabernacle is a shadow of the true sanctuary, Christ dwelling among us (Heb 9, John 1:14).',
    'The manna in the wilderness foreshadows Christ, the Bread of Life (John 6).',
  ],
  Monarchy: [
    'David as a type of Christ: the anointed shepherd-king rejected then exalted.',
    'The Temple prefigures Christ as the true dwelling of God (John 2:19-21).',
    'Solomon\'s wisdom and the peace (shalom) of his reign foreshadow Christ\'s kingdom of peace.',
    'Elijah prefigures John the Baptist in preparing the way (Mal 4:5, Luke 1:17).',
    'The Davidic Covenant promises an eternal throne, fulfilled in Christ (Luke 1:32-33).',
  ],
  Exile: [
    'The Suffering Servant (Isa 53) is Christ, bearing the sins of many.',
    'Daniel\'s Son of Man (Dan 7:13) receives an eternal kingdom — fulfilled in Christ.',
    'The exile and return prefigure the pattern of judgment and restoration in Christ.',
    'Jonah\'s three days in the fish prefigures Christ\'s three days in the tomb (Matt 12:40).',
    'The new temple vision (Ezek 40-48) points to God dwelling with His people eternally (Rev 21).',
  ],
  Gospel: [
    'Jesus as the new Moses: giving the law on a mountain, escaping a slaughter of infants.',
    'Jesus as the new Israel: coming out of Egypt, through baptism, tested in the wilderness.',
    'Jesus as the true Temple (John 2:19-21).',
    'Jesus as the Bread of Life, fulfilling the manna.',
    'Jesus as the Good Shepherd, fulfilling Ezekiel 34.',
  ],
  Apostolic: [
    'The Church as the new temple of the Holy Spirit.',
    'Christ as the true High Priest, fulfilling the Levitical order (Hebrews).',
    'The Church as the body of Christ, His fullness on earth.',
    'The New Jerusalem as the fulfillment of the temple and Eden (Rev 21-22).',
    'Christ as the second Adam, the head of a new humanity (Rom 5, 1 Cor 15).',
  ],
};

function pickRotated<T>(arr: T[], index: number): T {
  return arr[index % arr.length];
}

function getBookSection(book: BibleBook, chapter: number): string {
  const sections = CHAPTER_SECTIONS[book.id];
  if (!sections || sections.length === 0) return book.name;
  const sectionSize = Math.ceil(book.chapters / sections.length);
  const sectionIndex = Math.min(Math.floor((chapter - 1) / sectionSize), sections.length - 1);
  return sections[sectionIndex];
}

function generateHistoricalContext(book: BibleBook, chapter: number, section: string): string {
  const era = book.era;
  const dateRange = ERA_DATE_RANGES[era];
  const keyEvents = ERA_KEY_EVENTS[era];
  const theme = BOOK_THEMES[book.id] || 'covenant faithfulness';

  const chapterFraction = chapter / book.chapters;
  let positionPhrase: string;
  if (chapterFraction < 0.25) positionPhrase = `in the opening movement of ${book.name}`;
  else if (chapterFraction < 0.5) positionPhrase = `in the first half of ${book.name}`;
  else if (chapterFraction < 0.75) positionPhrase = `in the latter half of ${book.name}`;
  else positionPhrase = `near the conclusion of ${book.name}`;

  const sectionClause = section !== book.name ? ` This chapter falls under the section on "${section}."` : '';

  return `${book.name} ${chapter} addresses ${theme}, positioned ${positionPhrase} during the ${era} era (${dateRange}). The broader historical backdrop includes ${keyEvents}.${sectionClause} This is chapter ${chapter} of ${book.chapters} in ${book.name}.`;
}

function generateTheologicalNotes(book: BibleBook, chapter: number, section: string): string[] {
  const era = book.era;
  const theme = BOOK_THEMES[book.id] || 'covenant faithfulness';
  const sectionNote = `${book.name} ${chapter} advances the theme of ${theme} within the "${section}" section of the book.`;

  const covenantNote =
    book.testament === 'OT'
      ? pickRotated(
          [
            `This chapter reflects the ${era} era\'s emphasis on God\'s covenant dealings with His people — ${chapter} chapters into ${book.name}, the covenantal thread continues unbroken.`,
            `The theological center of ${book.name} ${chapter} is God\'s faithfulness to His covenant promises, even when His people falter.`,
            `Chapter ${chapter} of ${book.name} reveals God\'s character — His holiness, mercy, and justice — as the foundation of His dealings with Israel.`,
          ],
          chapter,
        )
      : pickRotated(
          [
            `${book.name} ${chapter} unfolds the significance of Christ\'s person and work — the fulfillment of all the Old Testament pointed toward.`,
            `The theological heartbeat of ${book.name} ${chapter} is the grace of God manifested in Christ and applied to His Church.`,
            `Chapter ${chapter} of ${book.name} reveals the implications of the gospel for the believer\'s identity, conduct, and hope.`,
          ],
          chapter,
        );

  const positionNote =
    chapter === 1
      ? `As the opening chapter, ${book.name} ${chapter} sets the tone and introduces motifs that will recur throughout the book.`
      : chapter === book.chapters
        ? `As the final chapter, ${book.name} ${chapter} brings resolution and climaxes the book\'s central argument.`
        : `Placed at chapter ${chapter} of ${book.chapters}, this passage builds on what has come before and prepares the reader for what follows.`;

  return [sectionNote, covenantNote, positionNote];
}

function generateLinguisticNotes(book: BibleBook, chapter: number): string[] {
  const languages = BOOK_LANGUAGES[book.id] || ['Hebrew'];
  const primaryLang = languages[0];
  const hasAramaic = languages.includes('Aramaic');

  const langNote =
    primaryLang === 'Hebrew'
      ? `${book.name} is written primarily in ${primaryLang}, characteristic of the Old Testament\'s Semitic linguistic tradition.`
      : `${book.name} is written in ${primaryLang}, the common language of the first-century Mediterranean world, carrying the gospel across cultural boundaries.`;

  const featureNote = pickRotated(
    primaryLang === 'Hebrew'
      ? [
          `The Hebrew text of ${book.name} ${chapter} employs parallelism — a hallmark of Semitic poetry and prose — reinforcing meaning through repetition and variation.`,
          `Key terms in ${book.name} ${chapter} carry covenantal weight; Hebrew words like hesed (steadfast love), berith (covenant), and yir\'ah (fear/reverence) anchor the theology in language.`,
          `The narrative style of ${book.name} ${chapter} uses the waw-consecutive construction typical of Hebrew storytelling, linking events in a covenantal sequence.`,
          `Hebrew wordplay may be present in ${book.name} ${chapter}: names often carry meaning (e.g., Adam from adamah, Israel from sara), embedding theology in the very words used.`,
        ]
      : [
          `The Greek text of ${book.name} ${chapter} uses Koine Greek — the common tongue of the Roman world — making the message accessible to all social classes.`,
          `Key Greek terms in ${book.name} ${chapter} (such as charis, grace; pistis, faith; agape, love) carry theological precision that shapes Christian doctrine.`,
          `The sentence structure of ${book.name} ${chapter} employs Greek participles and subordinate clauses to build layered, theological arguments.`,
          `Pauline or Johannine vocabulary in ${book.name} ${chapter} reflects the author\'s distinctive theological lexicon, developed across the letter or gospel.`,
        ],
    chapter,
  );

  const aramaicNote = hasAramaic
    ? `Note: portions of ${book.name} are in Aramaic, the diplomatic and common language of the Near Eastern empires, bridging Hebrew and the broader world.`
    : undefined;

  const notes = [langNote, featureNote];
  if (aramaicNote) notes.push(aramaicNote);
  return notes;
}

function generateCrossReferences(book: BibleBook, chapter: number): { from: string; to: string; note: string }[] {
  const refs: { from: string; to: string; note: string }[] = [];
  const abbr = book.abbr;
  const isOT = book.testament === 'OT';

  const otToNT = [
    { from: `${abbr} ${chapter}`, to: 'Matt 1-2', note: 'Matthew frames Jesus as the fulfillment of Old Testament prophecy' },
    { from: `${abbr} ${chapter}`, to: 'Rom 9-11', note: 'Paul wrestles with Israel\'s history and God\'s covenant purposes' },
    { from: `${abbr} ${chapter}`, to: 'Heb 8-10', note: 'The old covenant shadows fulfilled in Christ\'s once-for-all sacrifice' },
    { from: `${abbr} ${chapter}`, to: 'Rev 21-22', note: 'The new creation as the consummation of all Old Testament hope' },
    { from: `${abbr} ${chapter}`, to: 'Gal 3-4', note: 'The law as tutor leading to Christ; the promise fulfilled by faith' },
    { from: `${abbr} ${chapter}`, to: '1 Cor 10', note: 'Old Testament events as examples and warnings for the Church' },
    { from: `${abbr} ${chapter}`, to: '2 Cor 3', note: 'The glory of the old covenant vs. the surpassing glory of the new' },
    { from: `${abbr} ${chapter}`, to: '1 Pet 2', note: 'The living stone and a holy priesthood drawn from Old Testament types' },
  ];

  const ntInternal = [
    { from: `${abbr} ${chapter}`, to: 'John 1:1-18', note: 'The prologue as the theological lens for reading this chapter' },
    { from: `${abbr} ${chapter}`, to: 'Eph 1-3', note: 'The mystery of Christ revealed across the ages' },
    { from: `${abbr} ${chapter}`, to: 'Col 1:15-20', note: 'Christ as the image of the invisible God and head of all creation' },
    { from: `${abbr} ${chapter}`, to: 'Phil 2:5-11', note: 'The self-emptying and exaltation of Christ as the pattern for believers' },
  ];

  const pool = isOT ? otToNT : ntInternal;
  const count = Math.min(3, pool.length);
  const startIdx = chapter % pool.length;

  for (let i = 0; i < count; i++) {
    refs.push(pool[(startIdx + i) % pool.length]);
  }

  return refs;
}

function generateTypology(book: BibleBook, chapter: number): string[] {
  const eraTypology = ERA_TYPOLOGY[book.era] || [];
  const count = Math.min(3, eraTypology.length);

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(eraTypology[(chapter + i) % eraTypology.length]);
  }

  const section = getBookSection(book, chapter);
  const bookSpecific = pickRotated(
    [
      `Within the "${section}" section, ${book.name} ${chapter} contributes to the larger typological pattern that finds its fulfillment in Christ.`,
      `The events and imagery of ${book.name} ${chapter} echo forward into the New Testament, where Christ and His Church fulfill and transform them.`,
      `Read through the lens of Luke 24:27 ("beginning with Moses and all the Prophets, he explained to them what was said in all the Scriptures concerning himself"), ${book.name} ${chapter} points to Christ.`,
    ],
    chapter,
  );

  result.push(bookSpecific);
  return result;
}

export function getChapterHermeneutics(bookId: string, chapter: number): ChapterHermeneutics {
  const book = BOOK_MAP[bookId];
  if (!book) {
    return {
      bookId,
      bookName: bookId,
      chapter,
      era: 'Patriarchal',
      historicalContext: 'Hermeneutical data for this book is not yet available.',
      theologicalNotes: [],
      linguisticNotes: [],
      crossReferences: [],
      typology: [],
    };
  }

  const section = getBookSection(book, chapter);

  return {
    bookId: book.id,
    bookName: book.name,
    chapter,
    era: book.era,
    historicalContext: generateHistoricalContext(book, chapter, section),
    theologicalNotes: generateTheologicalNotes(book, chapter, section),
    linguisticNotes: generateLinguisticNotes(book, chapter),
    crossReferences: generateCrossReferences(book, chapter),
    typology: generateTypology(book, chapter),
  };
}

export function getTotalBibleChapters(): number {
  return BIBLE_BOOKS.reduce((sum, b) => sum + b.chapters, 0);
}
