export interface LiturgyEntry {
  bookId: string;
  chapter: number;
  service: string;
  section: string;
  syriacTerm?: string;
  insight: string;
}

export const MAR_THOMA_LITURGY_DATA: LiturgyEntry[] = [
  // ── Holy Qurbana — Anaphora of St. James ──
  {
    bookId: 'GEN',
    chapter: 1,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — Creation Prologue',
    syriacTerm: 'Kaumo',
    insight:
      'The Anaphora opens with the creation narrative, declaring Christ the Word through whom all things were made. The priest\'s opening greeting "Grace of our Lord" echoes the divine fiat — light shining from darkness.',
  },
  {
    bookId: 'GEN',
    chapter: 3,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The Fall & Redemption',
    syriacTerm: 'Husoyo',
    insight:
      'The promise of the Seed of the Woman (Gen 3:15) is the first gospel proclaimed in the Qurbana\'s preparatory prayers — the same Seed whose body is broken on the altar. The husoyo (absolution) proclaims the reversal of the Fall through the Second Adam.',
  },
  {
    bookId: 'GEN',
    chapter: 14,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — Melchizedek Offertory',
    syriacTerm: 'Qurbana',
    insight:
      'Melchizedek, king of Salem and priest of God Most High, offers bread and wine to Abraham — the archetype of the priestly offertory. St. James\'s Anaphora explicitly names this moment: Christ, our eternal Melchizedek, offers Himself under bread and wine.',
  },
  {
    bookId: 'GEN',
    chapter: 22,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The Sacrifice of Isaac',
    syriacTerm: 'Sliba',
    insight:
      'Abraham\'s offering of Isaac on Moriah prefigures the Father offering the Son on the cross and on the altar. The ram caught in the thicket is the type of Christ the substitute. The priest signs the cross (sliba) over the elements, recalling Isaac\'s wood and Christ\'s wood.',
  },
  {
    bookId: 'EXO',
    chapter: 12,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The Passover Lamb',
    syriacTerm: 'Pesaha',
    insight:
      'The slaying of the spotless lamb, whose blood marks the doorposts, is the foundation of the Qurbana\'s sacrificial theology. Christ our Pesaha is slain mystically on the altar, and His blood seals the new covenant people.',
  },
  {
    bookId: 'EXO',
    chapter: 14,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — Crossing the Red Sea',
    syriacTerm: 'M\'sawdo',
    insight:
      'Israel passing through the sea into freedom is the type of baptism, and the Qurbana invokes this crossing in the preparatory prayers. The bread of the Qurbana is the spiritual manna of the new exodus, the journey from sin to the promised land of the Kingdom.',
  },
  {
    bookId: 'EXO',
    chapter: 25,
    service: 'Holy Qurbana',
    section: 'Offertory — The Table of Showbread',
    syriacTerm: 'Thablitho',
    insight:
      'The showbread on the golden table before the veil is the direct type of the Qurbana bread on the thablitho (altar tablet). Twelve loaves for twelve tribes become the one Bread for the one Church. The tabernacle dimensions shape the sanctuary arrangement to this day.',
  },
  {
    bookId: 'PSA',
    chapter: 22,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The Suffering Servant Psalm',
    syriacTerm: 'Mawdi\'ono',
    insight:
      '"My God, my God, why have you forsaken me?" — Christ quotes this from the cross and the priest chants it in the mawdi\'ono (supplementary prayers). The Qurbana proclaims that the altar is the cross made present: the forsaken One is now the Host who feeds His people.',
  },
  {
    bookId: 'PSA',
    chapter: 51,
    service: 'Holy Qurbana',
    section: 'Trisagion — Penitential Preparation',
    syriacTerm: 'Tawb\'otho',
    insight:
      'David\'s contrite heart shapes the tawb\'otho (prayers of repentance) before the Qurbana. The Mar Thoma tradition places Psalm 51 at the threshold of the sanctuary — only the broken in heart may approach the holy mysteries.',
  },
  {
    bookId: 'PSA',
    chapter: 110,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The Priest-King',
    syriacTerm: 'Kahno',
    insight:
      '"You are a priest forever after the order of Melchizedek" — this verse is chanted as the priest ascends the steps to begin the Anaphora. The kahno (priesthood) of Christ is eternal and non-Levitical, transferred to the apostolic ministry of the Church.',
  },
  {
    bookId: 'ISA',
    chapter: 6,
    service: 'Holy Qurbana',
    section: 'Trisagion — The Sanctus',
    syriacTerm: 'Qadisha',
    insight:
      'The threefold "Holy, holy, holy" heard by Isaiah at the throne is the origin of the Trisagion and the Qadisha chanted before the Gospel and during the Anaphora. The coal from the altar that cleansed Isaiah\'s lips is the type of the Eucharist that cleanses the communicant\'s soul.',
  },
  {
    bookId: 'ISA',
    chapter: 53,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The Suffering Servant',
    syriacTerm: 'Sahdo',
    insight:
      'The Anaphora\'s Words of Institution are preceded by a meditation on Isaiah 53 — the lamb led to slaughter. The bread broken is the body "pierced for our transgressions." The Sahdo (martyr-witness) of Christ is re-presented not as a memory but as a living sacrifice.',
  },
  {
    bookId: 'MAT',
    chapter: 26,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — Words of Institution',
    syriacTerm: 'Wahdo',
    insight:
      'The Upper Room words — "This is my body... This is my blood" — are the verba Christi recited at the moment of consecration. The Mar Thoma priest speaks Christ\'s own words, not as a memorial narration, but as the effective wahdo (word) that makes the elements the body and blood.',
  },
  {
    bookId: 'LUK',
    chapter: 22,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The New Covenant',
    syriacTerm: 'Diyathiqi Hadto',
    insight:
      'Luke records the cup as "the new covenant in my blood" — the diyathiqi hadto. The Qurbana is the covenant-renewal meal. Each celebration re-enacts the covenant ratification, binding the communicant to Christ and to the community of the Church.',
  },
  {
    bookId: '1CO',
    chapter: 11,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — Apostolic Tradition',
    syriacTerm: 'M\'sabdo',
    insight:
      'Paul\'s "I received from the Lord what I also delivered to you" is the warrant for liturgical tradition (m\'sabdo). The Qurbana is not an invention but a received mystery, handed from Christ to the apostles to the bishops to the priests, unchanged in its essentials.',
  },
  {
    bookId: 'HEB',
    chapter: 9,
    service: 'Holy Qurbana',
    section: 'Epiclesis — The Heavenly Sanctuary',
    syriacTerm: 'Ruho Qadeesho',
    insight:
      'Hebrews describes Christ entering the heavenly sanctuary with His own blood. The Epiclesis invokes the Ruho Qadeesho (Holy Spirit) to descend on the elements — the earthly altar is joined to the heavenly, and the once-for-all sacrifice is made present here and now.',
  },
  {
    bookId: 'HEB',
    chapter: 10,
    service: 'Holy Qurbana',
    section: 'Epiclesis — One Sacrifice for All Time',
    syriacTerm: 'D\'hahmo',
    insight:
      'The single offering that perfects the saints for all time is the theological heart of the Qurbana\'s non-repetition principle. The d\'hahmo (sacrifice) is not a new sacrifice but anamnesis — the same sacrifice made sacramentally present, not repeated.',
  },
  {
    bookId: 'REV',
    chapter: 1,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The Heavenly Liturgy',
    syriacTerm: 'Sahd\'o',
    insight:
      'John\'s vision of the Son of Man among the lampstands reveals the heavenly liturgy of which every earthly Qurbana is a participation. The priest facing east, the incense, the robed altar — all mirror the heavenly worship shown to John on Patmos.',
  },
  {
    bookId: 'REV',
    chapter: 21,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The New Jerusalem',
    syriacTerm: 'Urkho Hadto',
    insight:
      'The New Jerusalem descending is the eschatological horizon of every Qurbana. The Communion anticipates the marriage supper of the Lamb. The urkho hadto (new city) has no temple, for the Lord God and the Lamb are its temple — the Qurbana is a foretaste of that unveiled presence.',
  },
  {
    bookId: 'REV',
    chapter: 22,
    service: 'Holy Qurbana',
    section: 'Anaphora of St. James — The River of Life',
    syriacTerm: 'Nahro d\'khayeh',
    insight:
      'The river of the water of life flowing from the throne is the Eucharist\'s promise fulfilled — "whoever drinks of the water I give will never thirst." The Qurbana ends with the faithful sent as bearers of this living water, the nahro d\'khayeh, into the world.',
  },

  // ── Holy Baptism (Mamodisa) ──
  {
    bookId: 'JHN',
    chapter: 3,
    service: 'Holy Baptism',
    section: 'Mamodisa — Born of Water and Spirit',
    syriacTerm: 'Mamodisa',
    insight:
      'Jesus\'s discourse with Nicodemus — "born of water and the Spirit" — is the scriptural foundation of Mar Thoma baptismal theology. The Mamodisa is not merely symbolic washing; it is rebirth. The triple immersion signifies the three days of Christ\'s burial and resurrection.',
  },
  {
    bookId: 'EXO',
    chapter: 14,
    service: 'Holy Baptism',
    section: 'Mamodisa — Baptismal Exodus',
    syriacTerm: 'Ma\'mud\'to',
    insight:
      'The Red Sea crossing is the primal type of baptism — passing from slavery to freedom through water. The ma\'mud\'to (immersion) enacts this exodus for each catechumen: the old humanity drowns, the new rises. Paul makes this typology explicit in 1 Corinthians 10.',
  },
  {
    bookId: 'PSA',
    chapter: 51,
    service: 'Holy Baptism',
    section: 'Water Blessing — Cleanse Me with Hyssop',
    syriacTerm: 'Mooron',
    insight:
      '"Purge me with hyssop and I shall be clean; wash me and I shall be whiter than snow." The water-blessing prayer of the baptismal rite directly invokes Psalm 51. The sign of the cross in the consecrated water, traced with mooron (holy oil), makes the font a Jordan and a pool of Siloam.',
  },
  {
    bookId: 'MAT',
    chapter: 28,
    service: 'Holy Baptism',
    section: 'Mamodisa — The Trinitarian Formula',
    syriacTerm: 'Smushlisho',
    insight:
      'The Great Commission — "baptizing them in the name of the Father and of the Son and of the Holy Spirit" — is the exact formula spoken by the priest at every baptism. The smushlisho (Trinity) is invoked over the waters and over the candidate, sealing the new identity.',
  },
  {
    bookId: 'HEB',
    chapter: 10,
    service: 'Holy Baptism',
    section: 'Mamodisa — Hearts Sprinkled Clean',
    syriacTerm: 'Q\'dosho',
    insight:
      '"Having our hearts sprinkled from an evil conscience and our bodies washed with pure water" — Hebrews interprets baptism as the fulfillment of the Day of Atonement. The q\'dosho (sanctification) of the baptized person is both inward (heart) and outward (body), both sign and reality.',
  },

  // ── Holy Matrimony ──
  {
    bookId: 'GEN',
    chapter: 1,
    service: 'Holy Matrimony',
    section: 'Crown Blessing — Creation of Male and Female',
    syriacTerm: 'Kukshono',
    insight:
      '"Male and female He created them" is the opening text of the Mar Thoma wedding service. The kukshono (crowning) signifies that marriage is not merely a contract but a creation-order vocation, blessed before the Fall and restored in Christ.',
  },
  {
    bookId: 'GEN',
    chapter: 3,
    service: 'Holy Matrimony',
    section: 'Crown Blessing — The Garments of Skin',
    syriacTerm: 'Kushshobo',
    insight:
      'After the Fall, God clothes Adam and Eve — the first liturgical act of covering shame. The wedding crowns (kushshobo) are the garments of the new creation: the couple, clothed in Christ, are a sign that the Fall is overcome by sacrificial love, not by power.',
  },
  {
    bookId: 'EPH',
    chapter: 5,
    service: 'Holy Matrimony',
    section: 'Covenant — Christ and the Church',
    syriacTerm: 'Rozo',
    insight:
      '"This mystery is profound, and I am saying it refers to Christ and the Church." Marriage as rozo (mysterion) is a sacramental sign of Christ\'s covenant-love (hesed) for His bride. The crowning rite places the couple within this cosmic marriage of Christ and the Church.',
  },
  {
    bookId: 'REV',
    chapter: 21,
    service: 'Holy Matrimony',
    section: 'Crown Blessing — The Bride Adorned',
    syriacTerm: 'Kallyo',
    insight:
      'The New Jerusalem "prepared as a bride adorned for her husband" is the eschatological horizon of every Christian marriage. The kallyo (bride) image unites the earthly wedding to the heavenly wedding supper of the Lamb — the couple\'s love is a sign and foretaste of that final union.',
  },

  // ── Passion Week (Hasha) ──
  {
    bookId: 'JHN',
    chapter: 13,
    service: 'Passion Week',
    section: 'Maundy Thursday — The Washing of Feet',
    syriacTerm: 'Peeditho',
    insight:
      'Christ washing the disciples\' feet is re-enacted by the bishop or priest on Pesaha evening. The peeditho (humble service) inverts every model of authority — the Qurbana is only rightly received by those who allow Christ to wash their feet, and who wash others\'.',
  },
  {
    bookId: 'LUK',
    chapter: 22,
    service: 'Passion Week',
    section: 'Maundy Thursday — The Institution of the Qurbana',
    syriacTerm: 'Pesaha',
    insight:
      'On Pesaha night, the Mar Thoma Church commemorates the Last Supper with a full Qurbana and the words of institution from Luke 22. This is the night the priesthood and the Eucharist were born together — no Qurbana without the Upper Room, no Upper Room without the cross that follows.',
  },
  {
    bookId: 'PSA',
    chapter: 22,
    service: 'Passion Week',
    section: 'Good Friday — The Psalm of the Cross',
    syriacTerm: 'Slibo',
    insight:
      'Psalm 22 is chanted in its entirety during the Good Friday liturgy (Slibo). Every verse is read as a prophecy of the crucifixion — the mocking, the pierced hands and feet, the divided garments. The same psalm ends in vindication, presaging the resurrection.',
  },
  {
    bookId: 'ISA',
    chapter: 53,
    service: 'Passion Week',
    section: 'Good Friday — The Suffering Servant',
    syriacTerm: 'Sehad\'o',
    insight:
      'Isaiah 53 is the Good Friday lection in the West Syrian tradition. The sehad\'o (witness-martyr) is led to slaughter and "numbered with the transgressors" — the Mar Thoma liturgy reads this as a direct description of the crucified Christ, whose death is the atoning sacrifice.',
  },
  {
    bookId: 'JHN',
    chapter: 19,
    service: 'Passion Week',
    section: 'Good Friday — The Passion Narrative',
    syriacTerm: 'Sahdo',
    insight:
      'John 19, the passion narrative, is the central reading of Good Friday. Christ\'s side pours blood and water — the sacraments of Qurbana and Mamodisa flow from the cross. The Mar Thama liturgy sees the Church herself born from that pierced side, as Eve was born from Adam\'s.',
  },
  {
    bookId: 'MAT',
    chapter: 26,
    service: 'Passion Week',
    section: 'Hasha — Gethsemane and the Betrayal',
    syriacTerm: 'Haworyutho',
    insight:
      'Matthew 26 recounts Gethsemane, the betrayal, and the arrest — read on the evening of Pesaha. The haworyutho (agony) of Christ in the garden is the priest\'s agony as he prepares the Qurbana: "Not my will, but yours" is the prayer that makes the sacrifice possible.',
  },

  // ── Lectionary & Ordination ──
  {
    bookId: 'ISA',
    chapter: 6,
    service: 'Ordination',
    section: 'Consecration — Here Am I, Send Me',
    syriacTerm: 'Kahnutho',
    insight:
      'Isaiah\'s vision and "Here am I, send me" is the Old Testament reading for priestly ordination (kahnutho). The coal from the altar is the type of the Eucharist that purifies the priest\'s lips to proclaim the Word. No one is sent who has not first been cleansed and overwhelmed.',
  },
  {
    bookId: 'JHN',
    chapter: 13,
    service: 'Ordination',
    section: 'Consecration — Servant Leadership',
    syriacTerm: 'Peshatho',
    insight:
      'The foot-washing in John 13 is read at the ordination of priests. The peshatho (servant-ministry) is the only authority the Church knows — the priest is called to wash feet, not to lord it over. The towel and basin are the true insignia of the ordained.',
  },
  {
    bookId: 'HEB',
    chapter: 9,
    service: 'Ordination',
    section: 'Consecration — The High Priestly Order',
    syriacTerm: 'Koho',
    insight:
      'Hebrews 9 describes the high priest entering the holy place with blood — the theology of priesthood for the ordination rite. Christ is the koho (high priest) whose order is Melchizedekian, not Levitical, and the ordained priest participates in this eternal, indestructible priesthood.',
  },
  {
    bookId: 'ACT',
    chapter: 2,
    service: 'Lectionary',
    section: 'Pentecost Reading — The Spirit Poured Out',
    syriacTerm: 'Ukhdomo',
    insight:
      'Acts 2 is the Pentecost lectionary reading in the Mar Thoma calendar. The ukhdomo (first things) of the Church — Spirit, Word, sacrament, community — are all born at Pentecost. The Qurbana\'s Epiclesis descends from this event: the same Spirit who fell on the upper room falls on the altar.',
  },
  {
    bookId: 'REV',
    chapter: 1,
    service: 'Lectionary',
    section: 'Eastertide Reading — The Risen Lord Among the Lampstands',
    syriacTerm: 'Sahdo',
    insight:
      'Revelation 1 is read during the Eastertide liturgy. The sahdo (witness) of the exiled John on Patmos — "I was in the Spirit on the Lord\'s Day" — is the earliest testimony to Sunday worship. The Mar Thoma lectionary honors this by placing it at the threshold of the Easter season.',
  },
];

export function getLiturgyForChapter(bookId: string, chapter: number): LiturgyEntry[] {
  return MAR_THOMA_LITURGY_DATA.filter(
    (entry) => entry.bookId === bookId && entry.chapter === chapter,
  );
}
