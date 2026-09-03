export interface HermeneuticsNote {
  bookId: string;
  chapterRange: [number, number];
  era: string;
  historicalContext: string;
  theologicalNotes: string[];
  linguisticNotes: string[];
  crossReferences: { from: string; to: string; note: string }[];
  typology: string[];
}

export const HERMENEUTICS_DATA: HermeneuticsNote[] = [
  {
    bookId: 'GEN',
    chapterRange: [1, 11],
    era: 'Patriarchal',
    historicalContext: 'The primeval history covers creation, the fall, the flood, and the tower of Babel. Set in the Ancient Near East, roughly 2000-4000 BC by traditional chronology.',
    theologicalNotes: [
      'God creates ex nihilo (out of nothing) — demonstrating absolute sovereignty over all matter.',
      'The "Imago Dei" (Image of God) in Genesis 1:26-27 establishes human dignity and inherent worth.',
      'The Protoevangelion (Genesis 3:15) is the first promise of a redealer — the "seed of the woman" who will crush the serpent.',
    ],
    linguisticNotes: [
      'Elohim is a plural noun used with singular verbs, hinting at complexity within the Godhead.',
      'The Hebrew word "yom" (day) can mean a 24-hour period or an era/epoch.',
      'Adam comes from adamah (ground/earth) — the man from the mud.',
    ],
    crossReferences: [
      { from: 'Gen 1:1', to: 'John 1:1', note: 'Christ as the Word present at creation' },
      { from: 'Gen 1:26', to: 'Col 1:15', note: 'Christ as the image of the invisible God' },
      { from: 'Gen 3:15', to: 'Rev 12', note: 'The woman\'s seed vs. the dragon' },
    ],
    typology: [
      'Adam is a type of Christ (Rom 5:14) — the first man brought death, the second brought life.',
      'Noah\'s ark prefigures baptism (1 Pet 3:20-21) and the Church as a vessel of salvation.',
      'Melchizedek (Gen 14) is a type of Christ\'s eternal priesthood (Hebrews 7).',
    ],
  },
  {
    bookId: 'GEN',
    chapterRange: [12, 50],
    era: 'Patriarchal',
    historicalContext: 'The patriarchal era follows Abraham, Isaac, Jacob, and Joseph. Set in Canaan and Egypt, roughly 2000-1800 BC. The Near East was dominated by small city-states and the growing Egyptian Middle Kingdom.',
    theologicalNotes: [
      'The Abrahamic Covenant (Gen 12, 15, 17) is unconditional and forms the backbone of biblical history.',
      'God\'s promise includes land, descendants, and blessing to all nations — fulfilled in Christ.',
      'Joseph\'s story demonstrates providence: "You meant evil against me, but God meant it for good."',
    ],
    linguisticNotes: [
      'YHWH (the covenant name) first appears prominently in interaction with the patriarchs.',
      'Bethel means "House of God" — Jacob named it after his vision.',
      'Israel means "He struggles with God" — Jacob\'s new name after Peniel.',
    ],
    crossReferences: [
      { from: 'Gen 12:3', to: 'Gal 3:8', note: 'All nations blessed through Abraham\'s seed (Christ)' },
      { from: 'Gen 15:6', to: 'Rom 4:3', note: 'Abraham believed God and it was counted as righteousness' },
      { from: 'Gen 22', to: 'John 3:16', note: 'The beloved son and the offering — the Father gives the Son' },
    ],
    typology: [
      'Isaac on the altar (Gen 22) prefigures Christ: the beloved son, the wood on his back, the third day.',
      'Joseph as the rejected brother who saves his people — a type of Christ\'s rejection and exaltation.',
      'Jacob\'s ladder (Gen 28) is fulfilled in Christ as the mediator between heaven and earth (John 1:51).',
    ],
  },
  {
    bookId: 'EXO',
    chapterRange: [1, 40],
    era: 'Exodus',
    historicalContext: 'The exodus from Egypt, the giving of the Law at Sinai, and the construction of the Tabernacle. Set roughly 1446 BC (early date) or 1290 BC (late date). Egypt was under the New Kingdom (likely Ramesses II).',
    theologicalNotes: [
      'The Exodus is the central redemptive event of the Old Testament — God rescues by blood and power.',
      'The Passover lamb prefigures Christ, the Lamb of God who takes away the sin of the world.',
      'The Tabernacle is God dwelling among His people — a pattern of the heavenly reality.',
    ],
    linguisticNotes: [
      'YHWH is revealed as "I AM WHO I AM" (Exod 3:14) — the self-existent, covenant-keeping God.',
      'The Hebrew word for "redeem" (ga\'al) implies a family obligation to buy back.',
      'Moses\' name likely derives from Egyptian msy ("born of") and Hebrew mashah ("drawn out").',
    ],
    crossReferences: [
      { from: 'Exod 12', to: '1 Cor 5:7', note: 'Christ our Passover lamb has been sacrificed' },
      { from: 'Exod 16', to: 'John 6', note: 'Manna in the wilderness and the Bread of Life' },
      { from: 'Exod 20', to: 'Matt 5-7', note: 'The Law and the Sermon on the Mount' },
      { from: 'Exod 25', to: 'John 1:14', note: 'God dwelling (tabernacled) among us' },
    ],
    typology: [
      'Moses as a type of Christ: prophet, mediator, deliverer, intercessor (Deut 18:15).',
      'The Passover lamb without blemish prefigures Christ (1 Cor 5:7).',
      'The rock struck for water is Christ (1 Cor 10:4).',
      'The Tabernacle is a shadow of the true sanctuary (Hebrews 9).',
    ],
  },
  {
    bookId: 'JDG',
    chapterRange: [1, 21],
    era: 'Monarchy',
    historicalContext: 'The period of the judges, roughly 1375-1050 BC. A chaotic era when "everyone did what was right in his own eyes." Israel was a loose tribal confederation surrounded by Canaanites, Moabites, Midianites, and Philistines.',
    theologicalNotes: [
      'The cycle of sin, oppression, repentance, and deliverance reveals God\'s patience and justice.',
      'Every judge is flawed — pointing to the need for a perfect king.',
      'Deborah, Gideon, and Samson show God using unlikely instruments.',
    ],
    linguisticNotes: [
      'The Hebrew term shophet means "judge" but also "ruler/deliverer."',
      'The refrain "in those days there was no king in Israel" frames the entire book.',
    ],
    crossReferences: [
      { from: 'Judg 2', to: 'Acts 13:20', note: 'Paul mentions the period of the judges' },
      { from: 'Judg 6-8', to: 'Heb 11:32', note: 'Gideon in the hall of faith' },
    ],
    typology: [
      'The judges as imperfect saviors point to Christ, the perfect judge and king.',
      'Samson\'s death defeating enemies prefigures Christ\'s death defeating sin and death.',
    ],
  },
  {
    bookId: '1SA',
    chapterRange: [1, 31],
    era: 'Monarchy',
    historicalContext: 'The transition from judges to monarchy, roughly 1050-1010 BC. Samuel, Saul, and the young David. The Philistine threat dominated, culminating in the battle of Gilboa.',
    theologicalNotes: [
      'Israel\'s demand for a king (1 Sam 8) was a rejection of God\'s direct rule.',
      'David is chosen not by appearance but by the heart — God looks at the inner person.',
      'Saul\'s fall warns against partial obedience disguised as worship.',
    ],
    linguisticNotes: [
      'The Hebrew phrase "a man after God\'s own heart" (1 Sam 13:14) implies alignment of will.',
      'Ichabod means "the glory has departed" — named at the loss of the ark.',
    ],
    crossReferences: [
      { from: '1 Sam 16', to: 'Acts 13:22', note: 'David as a man after God\'s heart' },
      { from: '1 Sam 24', to: 'Ps 57', note: 'David in the cave — a parallel account' },
    ],
    typology: [
      'David as a type of Christ: the anointed shepherd-king who is rejected then exalted.',
      'Jonathan\'s self-giving covenant love reflects Christ\'s love for the Church.',
    ],
  },
  {
    bookId: '2SA',
    chapterRange: [1, 24],
    era: 'Monarchy',
    historicalContext: 'David\'s reign over a united Israel, roughly 1010-970 BC. Jerusalem is captured and established as the capital. The era includes triumphs (victories, the covenant) and tragedies (Bathsheba, Absalom).',
    theologicalNotes: [
      'The Davidic Covenant (2 Sam 7) promises an eternal throne — fulfilled in Christ.',
      'David\'s repentance (Psalm 51) shows the path of restoration after grievous sin.',
      'God disciplines His king — both in love and justice.',
    ],
    linguisticNotes: [
      'The phrase "house" in 2 Sam 7 plays on dynasty, temple, and family.',
    ],
    crossReferences: [
      { from: '2 Sam 7', to: 'Luke 1:32-33', note: 'Jesus inherits the throne of David' },
      { from: '2 Sam 7', to: 'Rev 22:16', note: 'Jesus as the Root and Offspring of David' },
      { from: '2 Sam 11-12', to: 'Ps 51', note: 'David\'s repentance psalm' },
    ],
    typology: [
      'David\'s eternal kingdom points directly to Christ\'s everlasting kingdom.',
      'David\'s sufferings and betrayal by his own son prefigure Christ\'s betrayal.',
    ],
  },
  {
    bookId: '1KI',
    chapterRange: [1, 22],
    era: 'Monarchy',
    historicalContext: 'Solomon\'s reign, the building of the Temple, and the kingdom\'s division, roughly 970-853 BC. The era features Egypt\'s resurgence, Phoenician alliances, and the rise of Assyria.',
    theologicalNotes: [
      'Solomon\'s wisdom is a gift, but his compromises with foreign wives bring decline.',
      'The Temple is the permanent dwelling of God\'s name — a fulfillment of the tabernacle.',
      'Elijah\'s ministry demonstrates God\'s supremacy over Baal.',
    ],
    linguisticNotes: [
      'The Hebrew word for "wisdom" (chokmah) implies practical skill, not abstract knowledge.',
      'Elijah means "My God is YHWH" — fitting his contest with Baal.',
    ],
    crossReferences: [
      { from: '1 Kgs 8', to: 'Acts 7:47', note: 'Solomon built the house, but God doesn\'t dwell in temples made with hands' },
      { from: '1 Kgs 17-19', to: 'Luke 4:25', note: 'Elijah and the widow of Zarephath' },
      { from: '1 Kgs 19', to: 'Rom 11:2-4', note: 'The 7,000 who didn\'t bow to Baal' },
    ],
    typology: [
      'Solomon as a type of Christ in his wisdom and the peace (shalom) of his reign.',
      'The Temple prefigures Christ as the true dwelling of God (John 2:19-21).',
      'Elijah prefigures John the Baptist (Mal 4:5, Luke 1:17).',
    ],
  },
  {
    bookId: '2KI',
    chapterRange: [1, 25],
    era: 'Exile',
    historicalContext: 'From the divided kingdom to the fall of Samaria (722 BC) and Jerusalem (586 BC). Assyria and then Babylon dominate the Near East. Prophets like Elijah, Elisha, Isaiah, and Jeremiah minister in this era.',
    theologicalNotes: [
      'The exile is the covenant curse for persistent idolatry (Deut 28).',
      'God preserves a remnant — never breaking His covenant promise.',
      'Elisha\'s double portion of Elijah\'s spirit shows God\'s continuing prophetic word.',
    ],
    linguisticNotes: [
      'The phrase "to this day" marks editorial notes from a later compiler.',
    ],
    crossReferences: [
      { from: '2 Kgs 17', to: '2 Chr 36', note: 'Parallel account of exile' },
      { from: '2 Kgs 22', to: '2 Chr 34', note: 'Josiah\'s reform' },
    ],
    typology: [
      'Elisha\'s miracles (feeding, healing, raising) foreshadow Christ\'s ministry.',
      'The exile and return prefigure the pattern of judgment and restoration in Christ.',
    ],
  },
  {
    bookId: 'ISA',
    chapterRange: [1, 66],
    era: 'Exile',
    historicalContext: 'Isaiah ministered in Jerusalem from roughly 740-700 BC, during the reigns of Uzziah through Hezekiah. He witnessed the Assyrian threat and the fall of the northern kingdom. Chapters 40-66 address the future exile and restoration.',
    theologicalNotes: [
      'Isaiah is the most quoted prophet in the New Testament — the "fifth gospel."',
      'The Suffering Servant songs (Isa 42, 49, 50, 52-53) prophetically depict Christ.',
      'Isaiah 53 is the clearest Old Testament prophecy of substitutionary atonement.',
    ],
    linguisticNotes: [
      'The name Isaiah means "YHWH is salvation."',
      'The Hebrew term "servant" (ebed) can refer to Israel, the prophet, or the Messiah.',
      'Isaiah uses "Holy One of Israel" 25 times — his signature title for God.',
    ],
    crossReferences: [
      { from: 'Isa 7:14', to: 'Matt 1:23', note: 'The virgin birth prophecy' },
      { from: 'Isa 9:6', to: 'Luke 2:11', note: 'A child is born, a son is given' },
      { from: 'Isa 53', to: 'Acts 8:32-33', note: 'The Ethiopian eunuch reads about the Suffering Servant' },
      { from: 'Isa 61', to: 'Luke 4:18', note: 'Jesus reads Isaiah in the Nazareth synagogue' },
    ],
    typology: [
      'The Suffering Servant (Isa 53) is Christ, bearing the sins of many.',
      'Isaiah\'s new heavens and new earth (Isa 65-66) foreshadow Revelation 21-22.',
      'Immanuel (Isa 7:14) is fulfilled literally in Christ\'s incarnation.',
    ],
  },
  {
    bookId: 'JER',
    chapterRange: [1, 52],
    era: 'Exile',
    historicalContext: 'Jeremiah prophesied from roughly 627-580 BC, spanning the fall of Nineveh (612 BC) and culminating in the fall of Jerusalem (586 BC). He warned of judgment and lamented the destruction.',
    theologicalNotes: [
      'Jeremiah weeps for his people — the "weeping prophet" models pastoral grief.',
      'The New Covenant promise (Jer 31:31-34) is fulfilled in Christ (Heb 8, 10).',
      'God\'s plan is "for welfare and not for evil" (Jer 29:11) even in exile.',
    ],
    linguisticNotes: [
      'The Hebrew root for "return" (shuv) appears over 1,000 times in Jeremiah — a call to repentance.',
      'Jeremiah\'s name means "YHWH throws/establishes."',
    ],
    crossReferences: [
      { from: 'Jer 31:31-34', to: 'Heb 8:8-12', note: 'The New Covenant' },
      { from: 'Jer 1:5', to: 'Gal 1:15', note: 'Known and called before birth' },
    ],
    typology: [
      'Jeremiah as a suffering prophet prefigures Christ\'s rejection by his own people.',
      'The New Covenant (Jer 31) is inaugurated by Christ\'s blood (Luke 22:20).',
    ],
  },
  {
    bookId: 'EZK',
    chapterRange: [1, 48],
    era: 'Exile',
    historicalContext: 'Ezekiel was taken to Babylon in 597 BC and prophesied to the exiles. His visions include the glory departing the temple and a future restoration with a new temple.',
    theologicalNotes: [
      'God\'s glory departing (Ezek 10-11) shows the seriousness of sin — but returns (Ezek 43).',
      'The valley of dry bones (Ezek 37) promises national and spiritual resurrection.',
      'Ezekiel emphasizes individual responsibility before God (Ezek 18).',
    ],
    linguisticNotes: [
      'Ezekiel uses vivid symbolic actions as prophecy, not just words.',
      'The phrase "son of man" (ben adam) emphasizes human frailty before God.',
    ],
    crossReferences: [
      { from: 'Ezek 36:26', to: '2 Cor 5:17', note: 'A new heart and new creation' },
      { from: 'Ezek 37', to: 'John 5:28', note: 'Resurrection of the dead' },
    ],
    typology: [
      'The good shepherd (Ezek 34) is fulfilled in Christ (John 10).',
      'The new temple vision points to God dwelling with His people eternally (Rev 21).',
    ],
  },
  {
    bookId: 'DAN',
    chapterRange: [1, 12],
    era: 'Exile',
    historicalContext: 'Daniel was taken to Babylon in 605 BC and served through the Medo-Persian transition (539 BC). His apocalyptic visions span the Greek and Roman eras down to the end times.',
    theologicalNotes: [
      'Daniel shows faithfulness to God in a pagan court — a model of cultural exile.',
      'The Son of Man (Dan 7:13) receives an eternal kingdom — fulfilled in Christ.',
      'Daniel\'s 70 weeks (Dan 9:24-27) is the key prophetic timeline for the Messiah.',
    ],
    linguisticNotes: [
      'Daniel is written partly in Aramaic (2:4-7:28), the diplomatic language of the era.',
      'The name Daniel means "God is my judge."',
    ],
    crossReferences: [
      { from: 'Dan 7:13', to: 'Matt 26:64', note: 'Jesus cites the Son of Man coming on the clouds' },
      { from: 'Dan 9:24-27', to: 'Gal 4:4', note: 'The fulness of time for the Messiah' },
      { from: 'Dan 3', to: 'Heb 11:34', note: 'Faith quenching the fire' },
    ],
    typology: [
      'Daniel as a faithful exile prefigures Christ in the world but not of it.',
      'The Son of Man (Dan 7) is Jesus\' favorite self-designation.',
      'The stone cut without hands (Dan 2) is the eternal kingdom of Christ.',
    ],
  },
  {
    bookId: 'MAT',
    chapterRange: [1, 28],
    era: 'Gospel',
    historicalContext: 'Jesus\' life and ministry, roughly 4 BC-30 AD. Set in Roman-occupied Judea and Galilee. Matthew writes to a Jewish audience to show Jesus as the promised Messiah.',
    theologicalNotes: [
      'Matthew presents Jesus as the fulfillment of Old Testament prophecy.',
      'The Kingdom of Heaven is the central theme — God\'s rule breaking into history.',
      'The Sermon on the Mount (Matt 5-7) is the charter of the kingdom.',
    ],
    linguisticNotes: [
      'Matthew uses "Kingdom of Heaven" (heaven as a circumlocution for God\'s name).',
      'The phrase "that it might be fulfilled" appears 12 times — fulfillment motif.',
    ],
    crossReferences: [
      { from: 'Matt 1:23', to: 'Isa 7:14', note: 'The virgin birth' },
      { from: 'Matt 27:46', to: 'Ps 22:1', note: 'My God, my God, why have you forsaken me?' },
      { from: 'Matt 28:19', to: 'Acts 1:8', note: 'The Great Commission and its power' },
    ],
    typology: [
      'Jesus as the new Moses: giving the law on a mountain, escaping a slaughter of infants.',
      'Jesus as the new Israel: coming out of Egypt, passing through baptism, tested in the wilderness.',
      'Jesus as the greater David: the true king of the Jews.',
    ],
  },
  {
    bookId: 'JHN',
    chapterRange: [1, 21],
    era: 'Gospel',
    historicalContext: 'Jesus\' ministry as told by the beloved disciple, writing late in the first century. John emphasizes signs and theological depth, structured around Jewish festivals.',
    theologicalNotes: [
      'John declares Jesus as the divine Logos (Word) — God incarnate.',
      'The seven "I AM" statements reveal Christ\'s identity using God\'s covenant name.',
      'John 3:16 is the most famous summary of the gospel: God\'s love and eternal life.',
    ],
    linguisticNotes: [
      'The Greek term Logos (Word) bridges Jewish and Greek thought — the organizing principle of reality.',
      'Ego eimi ("I AM") echoes the Septuagint rendering of Exodus 3:14.',
    ],
    crossReferences: [
      { from: 'John 1:1', to: 'Gen 1:1', note: 'The Word at creation' },
      { from: 'John 1:14', to: 'Exod 25', note: 'God tabernacling among us' },
      { from: 'John 3:14', to: 'Num 21', note: 'The bronze serpent lifted up' },
      { from: 'John 19:36', to: 'Exod 12:46', note: 'No bone broken — the Passover lamb' },
    ],
    typology: [
      'Jesus as the true Temple (John 2:19-21).',
      'Jesus as the Bread of Life, fulfilling the manna.',
      'Jesus as the Good Shepherd, fulfilling Ezekiel 34.',
    ],
  },
  {
    bookId: 'ACT',
    chapterRange: [1, 28],
    era: 'Apostolic',
    historicalContext: 'The early church from Jesus\' ascension (30 AD) to Paul\'s house arrest in Rome (60-62 AD). Set across the Roman Empire, from Jerusalem to Rome.',
    theologicalNotes: [
      'Acts shows the Spirit empowering the church to take the gospel to all nations.',
      'The day of Pentecost fulfills Joel\'s prophecy of the Spirit poured out.',
      'The gospel goes from Jerusalem to Rome — from Jewish to Gentile to universal.',
    ],
    linguisticNotes: [
      'Luke uses "we" sections (Acts 16, 20-21, 27-28) indicating he traveled with Paul.',
    ],
    crossReferences: [
      { from: 'Acts 2', to: 'Joel 2:28', note: 'The Spirit poured out' },
      { from: 'Acts 9', to: '1 Tim 1:13', note: 'Paul\'s conversion and his own reflection' },
    ],
    typology: [
      'The church as the new temple of the Spirit.',
      'Paul\'s missionary journeys mirror the spread of the kingdom.',
    ],
  },
  {
    bookId: 'ROM',
    chapterRange: [1, 16],
    era: 'Apostolic',
    historicalContext: 'Paul wrote Romans from Corinth around 56-57 AD, preparing for a visit to Rome and a mission to Spain. It is his most systematic theological treatise.',
    theologicalNotes: [
      'Romans lays out the gospel: all have sinned, justification by faith, life in the Spirit.',
      'Chapters 9-11 address the mystery of Israel\'s rejection and the Gentiles\' inclusion.',
      'Chapters 12-15 apply the gospel to practical Christian living.',
    ],
    linguisticNotes: [
      'The Greek term dikaiosyne means both "righteousness" and "justification."',
      'Paul uses diatribe style — imaginary dialogue with an interlocutor.',
    ],
    crossReferences: [
      { from: 'Rom 1:17', to: 'Hab 2:4', note: 'The just shall live by faith' },
      { from: 'Rom 4', to: 'Gen 15:6', note: 'Abraham\'s faith counted as righteousness' },
      { from: 'Rom 5:12', to: 'Gen 3', note: 'Death through Adam, life through Christ' },
    ],
    typology: [
      'Adam and Christ as the two heads of humanity (Rom 5).',
      'The olive tree grafting in Gentiles (Rom 11) — the one people of God.',
    ],
  },
  {
    bookId: 'REV',
    chapterRange: [1, 22],
    era: 'Apostolic',
    historicalContext: 'John received the Revelation on the island of Patmos, likely around 95 AD during Domitian\'s persecution. It is addressed to seven churches in Asia Minor.',
    theologicalNotes: [
      'Revelation unveils Christ\'s sovereignty over history and His final victory.',
      'The letters to the seven churches combine commendation, critique, and promise.',
      'The new heaven and new earth (Rev 21-22) complete the biblical story.',
    ],
    linguisticNotes: [
      'Revelation uses apocalyptic symbolism: numbers, colors, beasts, and cosmic imagery.',
      'The number 7 represents completeness; 12 represents God\'s people; 1000 represents vastness.',
    ],
    crossReferences: [
      { from: 'Rev 12', to: 'Gen 3:15', note: 'The woman\'s seed and the dragon' },
      { from: 'Rev 21', to: 'Isa 65:17', note: 'New heavens and new earth' },
      { from: 'Rev 22:13', to: 'Isa 44:6', note: 'The first and the last' },
    ],
    typology: [
      'Babylon in Revelation is the typological counterpart to worldly systems opposed to God.',
      'The New Jerusalem is the fulfillment of the temple and the garden of Eden — God with us forever.',
    ],
  },
];

export function getHermeneuticsForChapter(bookId: string, chapter: number): HermeneuticsNote | null {
  return (
    HERMENEUTICS_DATA.find(
      (h) => h.bookId === bookId && chapter >= h.chapterRange[0] && chapter <= h.chapterRange[1],
    ) || null
  );
}

export const ALL_CROSS_REFERENCES = HERMENEUTICS_DATA.flatMap((h) =>
  h.crossReferences.map((cr) => ({ ...cr, era: h.era })),
);
