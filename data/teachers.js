const teachers = [
  {
    name: "Mari Kräsupea",
    education: "Magistri tudeng",
    subject: "Diskreetne matemaatika",
    price: "30€/tund",
    about: `Olen 23-aastane tudeng ja alustan oma magistriõpingute teist aastat. Õpetamine on mulle alati meeldinud, sest naudin teadmiste jagamist ja seda, kui õpilased leiavad õpitavas teemas enesekindluse.`,
    accomplishments: [
      "Lõpetasin gümnaasiumi kuldmedaliga.",
      "Osalenud mitmetel matemaatikaolümpiaadidel.",
      "Saanud stipendiumi silmapaistvate õpitulemuste eest."
    ],
    feedback: [
      { name: "Laura, 11. klass", text: "Väga kannatlik ja selgitab keerulised teemad lihtsalt." },
      { name: "Tiit, 9. klass", text: "Tunnid on hästi üles ehitatud ja motiveerivad." },
      { name: "Marko, 7. klass", text: "Sõbralik ja toetav õpetaja, kes aitab ka raskemate teemadega." }
    ]
  },
  {
    name: "Mehis Mehine",
    education: "PhD Matemaatikas",
    subject: "Kõrgem matemaatika",
    price: "40€/tund",
    about: `Olen üle 10 aasta õpetanud ülikoolis analüüsi ja kõrgemat matemaatikat. Rõhun mõistmisele, mitte mehaanilisele lahendamisele.`,
    accomplishments: [
      "Kaitsesin doktorikraadi matemaatilises analüüsis.",
      "Avaldanud 8 teadusartiklit matemaatikaõpetuse valdkonnas.",
      "Juhendanud 6 magistritööd."
    ],
    feedback: [
      { name: "Karl, IT-tudeng", text: "Väga põhjalik ja selge seletus - isegi rasked teemad muutuvad loogiliseks." },
      { name: "Maris, matemaatika tudeng", text: "Parim loengupidaja, keda olen kohanud." },
      { name: "Rasmus, 2. kursus", text: "Tema kaudu hakkasin matemaatikat päriselt mõistma." }
    ]
  },
  {
    name: "Marleen Kask",
    education: "Bakalaureuse tudeng",
    subject: "Gümnaasiumi matemaatika",
    price: "26€/tund",
    about: `Õpin Tartu Ülikoolis matemaatikat ja naudin õpilaste aitamist eksamiteks valmistumisel. Olen kannatlik ja toetav õpetaja.`,
    accomplishments: [
      "Töötanud tugiõpetajana kahes koolis.",
      "Aidatud üle 30 õpilasel matemaatikaeksam edukalt sooritada.",
      "Vabatahtlikuna juhendanud matemaatikaringi põhikoolis."
    ],
    feedback: [
      { name: "Liisa, 12. klass", text: "Marleen tõi minu enesekindluse tagasi matemaatikas." },
      { name: "Grete, 11. klass", text: "Rahulik ja väga selge seletusstiil." },
      { name: "Jaan, 10. klass", text: "Tema tunnid on alati motiveerivad ja heas tempos." }
    ]
  },
  {
    name: "Toomas Sularaha",
    education: "Tudeng",
    subject: "Tõenäosusteooria ja matemaatiline statistika",
    price: "24€/tund",
    about: `Õpin majandust ja õpetan matemaatikat, sest head kvantitatiivsed oskused on edu alus igas erialas. Keskendun praktilisele rakendamisele.`,
    accomplishments: [
      "Töötanud abistava juhendajana statistikakursustel.",
      "Loonud Exceli ja Pythoniga õppematerjale statistikast.",
      "Abiõpetajana aidanud tudengeid eksamiteks valmistumisel."
    ],
    feedback: [
      { name: "Helena, 2. kursus", text: "Toomas seletab väga hästi praktilisi näiteid statistikast." },
      { name: "Mihkel, 1. kursus", text: "Tänu temale sain lõpuks normaaljaotusest aru." },
      { name: "Sofia, 12. klass", text: "Huumor ja teadmised käivad käsikäes!" }
    ]
  },
  {
    name: "Anti Nuga",
    education: "Õpin Ülikoolis",
    subject: "Lineaaralgebra",
    price: "22€/tund",
    about: `Matemaatika on minu kirg ja naudin eriti, kui saan keerulised teemad muuta arusaadavaks ja visuaalseks.`,
    accomplishments: [
      "Osalenud õpetamiskoolitustel ja pedagoogikakursustel.",
      "Kaasautor interaktiivsele õppematerjalile 'MatrixPlay'.",
      "Aidatud kümneid tudengeid lineaaralgebra eksamist läbi."
    ],
    feedback: [
      { name: "Laura, 1. kursus", text: "Anti kasutab super häid visuaalseid näiteid maatriksite kohta." },
      { name: "Jaanika, 12. klass", text: "Selgitab rahulikult ja väga süsteemselt." },
      { name: "Kevin, 1. kursus", text: "Tema tundides saab lõpuks aru, mida determinant tähendab." }
    ]
  },
  {
    name: "Anna Ploom",
    education: "Gümnaasiumi õpilane",
    subject: "Põhikooli matemaatika",
    price: "19€/tund",
    about: `Õpin ise gümnaasiumis ja tahan aidata noorematel õpilastel matemaatikat mõista sõbralikul ja lihtsal viisil.`,
    accomplishments: [
      "Koolisisese olümpiaadi võitja 2 aastat järjest.",
      "Abiõpetaja noorematele õpilastele.",
      "Matemaatikaringi juhendaja koolis."
    ],
    feedback: [
      { name: "Marta, 8. klass", text: "Anna seletab asju nii, et saan kohe aru!" },
      { name: "Kert, 9. klass", text: "Väga toetav ja abivalmis õpetaja." },
      { name: "Greta, 7. klass", text: "Tema tunnid on alati positiivsed ja motiveerivad." }
    ]
  },
  {
    name: "Mari Tamm",
    education: "PhD Matemaatikas",
    subject: "Diskreetne matemaatika ja kombinatoorika",
    price: "23€/tund",
    about: `Olen kogenud õppejõud, kes usub, et loogiline mõtlemine on oskus, mida saab igaüks arendada.`,
    accomplishments: [
      "Autor raamatule 'Kombinatoorika lihtsustatult'.",
      "Õpetanud diskreetset matemaatikat 15 aastat.",
      "Osalenud rahvusvahelistel konverentsidel."
    ],
    feedback: [
      { name: "Liis, tudeng", text: "Väga sügav ja inspireeriv õpetaja." },
      { name: "Andres, 1. kursus", text: "Tema seletused on alati loogilised ja hästi struktureeritud." },
      { name: "Reelika, 2. kursus", text: "Tundides valitseb rahulik ja keskendunud õhkkond." }
    ]
  },
  {
    name: "Madis Mesi",
    education: "Magistrikraad matemaatikas",
    subject: "Numbriline matemaatika ja analüüs",
    price: "28€/tund",
    about: `Olen töötanud nii õpetaja kui ka arendajana, mis aitab mul siduda matemaatikat reaalse maailmaga.`,
    accomplishments: [
      "Arendanud interaktiivseid õppetööriistu.",
      "Juhendanud bakalaureusetöid numbrilises analüüsis.",
      "Kogemus 6 aastat gümnaasiumiõpetajana."
    ],
    feedback: [
      { name: "Mikko, 11. klass", text: "Madis seob alati teooria praktikaga." },
      { name: "Eliis, 12. klass", text: "Selgitused on konkreetsed ja näidetega." },
      { name: "Tanel, tudeng", text: "Väga hea juhendaja keeruliste teemade puhul." }
    ]
  },
  {
    name: "Herman Tarkpea",
    education: "PhD Matemaatikas",
    subject: "Graafiteooria ja diskreetne matemaatika",
    price: "26€/tund",
    about: `Olen teadlane ja õpetaja, kelle eesmärk on panna õpilased mõtlema nagu matemaatikud.`,
    accomplishments: [
      "Doktorikraad graafiteoorias.",
      "Avaldanud teadusartikleid rahvusvaheliselt.",
      "Juhendanud tudengite teadusprojekte."
    ],
    feedback: [
      { name: "Kristjan, 3. kursus", text: "Tema entusiasm on nakkav!" },
      { name: "Maarja, tudeng", text: "Suudab keeruka teema väga hästi visualiseerida." },
      { name: "Peeter, 2. kursus", text: "Väga inspireeriv ja motiveeriv õpetaja." }
    ]
  },
  {
    name: "Ants Sulane",
    education: "Gümnaasiumi õpilane",
    subject: "Gümnaasiumi matemaatika",
    price: "18€/tund",
    about: `Olen gümnasist, kellele meeldib aidata teisi õpilasi matemaatika mõistmisel ja enesekindluse kasvatamisel.`,
    accomplishments: [
      "Matemaatikaolümpiaadi finalist.",
      "Klassi matemaatikaringi eestvedaja.",
      "Õpetanud nooremaid klassikaaslasi tasuta."
    ],
    feedback: [
      { name: "Rene, 8. klass", text: "Ants on väga sõbralik ja kannatlik." },
      { name: "Sandra, 9. klass", text: "Tänu temale sain eksamiks väga hästi valmis." },
      { name: "Marek, 7. klass", text: "Suudab seletada rasked teemad lihtsalt ja huvitavalt." }
    ]
  },
  {
    name: "Juhan Tammsalu",
    education: "Ülikooli tudeng",
    subject: "Põhikooli matemaatika ja füüsika",
    price: "17€/tund",
    about: `Õpin õpetajaks ja soovin näidata, et matemaatika on tegelikult väga praktiline ja loogiline.`,
    accomplishments: [
      "Osalenud õpetajakoolituse programmis.",
      "Õpetanud põhikoolis praktikal.",
      "Kirjutanud õppematerjale algklassidele."
    ],
    feedback: [
      { name: "Leelo, 8. klass", text: "Juhan oskab keerulise asja lihtsaks teha." },
      { name: "Karl, 7. klass", text: "Tema tunnid on alati lõbusad." },
      { name: "Adele, 9. klass", text: "Väga motiveeriv ja abivalmis juhendaja." }
    ]
  },
  {
    name: "Leena Hiinlane",
    education: "Magistri tudeng",
    subject: "Tõenäosusteooria ja statistikateooria",
    price: "24€/tund",
    about: `Õpin magistris andmeteadust ja õpetan matemaatikat, et jagada oma kirge statistika ja analüüsi vastu.`,
    accomplishments: [
      "Töötanud assistendina Tartu Ülikooli statistikakursusel.",
      "Kirjutanud juhendmaterjali 'Statistika algajatele'.",
      "Aidatud tudengitel Pythonis statistilisi mudeleid luua."
    ],
    feedback: [
      { name: "Rasmus, 2. kursus", text: "Leena seletab keerulised mõisted väga hästi lahti." },
      { name: "Liina, 1. kursus", text: "Tema tundides õppisin lõpuks regressioonanalüüsi selgeks!" },
      { name: "Andres, 3. kursus", text: "Teda on väga lihtne jälgida ja mõista." }
    ]
  },
  {
    name: "Hannah Labane",
    education: "Matemaatika õpetaja 10 aastat",
    subject: "Gümnaasiumi matemaatika ja analüüs",
    price: "25€/tund",
    about: `Õpetan matemaatikat juba kümnendat aastat ja naudin õpilastega töötamist igal tasemel.`,
    accomplishments: [
      "10 aastat kogemust kooliõpetajana.",
      "Koostanud õpilastele eksamieelseid töövihikuid.",
      "Juhendanud olümpiaadide ettevalmistusgruppe."
    ],
    feedback: [
      { name: "Laura, 12. klass", text: "Hannah on väga soe ja kannatlik õpetaja." },
      { name: "Martin, 11. klass", text: "Aitab igal sammul ja motiveerib alati." },
      { name: "Grete, 12. klass", text: "Tema meetodid on tõhusad ja huvitavad." }
    ]
  },
  {
    name: "Robin Kiire",
    education: "Õpin gümnaasiumis",
    subject: "Põhikooli matemaatika",
    price: "22€/tund",
    about: `Olen gümnaasiumiõpilane, kellele meeldib õpetada nooremaid ja aidata neil enesekindlust kasvatada.`,
    accomplishments: [
      "Võitnud piirkondliku matemaatikaolümpiaadi.",
      "Abiõpetaja koolis noorematele õpilastele.",
      "Tunnustatud kooli 'Aasta õpilane' tiitliga."
    ],
    feedback: [
      { name: "Siim, 7. klass", text: "Robin on kannatlik ja tore juhendaja." },
      { name: "Kelly, 8. klass", text: "Tänu talle sain viie eksamil!" },
      { name: "Oskar, 9. klass", text: "Selgitab rasked teemad lihtsaks." }
    ]
  },
  {
    name: "Joonas Mets",
    education: "Matemaatika õpetaja 23 aastat",
    subject: "Diskreetne matemaatika ja loogika",
    price: "35€/tund",
    about: `Olen kogenud õpetaja, kelle jaoks on oluline, et õpilane mõistaks mitte ainult reegleid, vaid ka nende taga olevat loogikat.`,
    accomplishments: [
      "23 aastat kogemust keskkoolis ja ülikoolis.",
      "Autor õpikule 'Loogiline mõtlemine matemaatikas'.",
      "Koolitanud õpetajaid üle Eesti."
    ],
    feedback: [
      { name: "Riin, tudeng", text: "Joonas on nõudlik, aga õiglane ja väga tark." },
      { name: "Eeva, 12. klass", text: "Tema tunnid on alati põnevad ja sisukad." },
      { name: "Margus, 11. klass", text: "Tänu talle sain aru, mis on matemaatiline tõestus." }
    ]
  },
  {
    name: "Johanna Leem",
    education: "Matemaatika",
    subject: "Põhikooli matemaatika",
    price: "20€/tund",
    about: `Õpetan põhikooliõpilasi, sest mulle meeldib näha, kuidas õpilased saavad aru, et matemaatika pole hirmus, vaid huvitav!`,
    accomplishments: [
      "5 aastat tugiõpetajana.",
      "Valitud kooli 'Parim noor õpetaja' 2023.",
      "Lõpetanud Tallinna Ülikooli matemaatika eriala."
    ],
    feedback: [
      { name: "Karin, 8. klass", text: "Johanna on alati positiivne ja toetav." },
      { name: "Kristo, 9. klass", text: "Tema abiga paranesid mu hinded märgatavalt." },
      { name: "Eliise, 7. klass", text: "Tundides tunnen, et saan kõigega hakkama." }
    ]
  }
];

module.exports = { teachers }