const booksArray = [
  {
    author: "Chinua Achebe",
    country: "Nigeria",
    imageLink: "../../images/things-fall-apart.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    price: 1958,

  },
  {
    author: "Hans Christian Andersen",
    country: "Denmark",
    imageLink: "../../images/fairy-tales.jpg",
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    price: 1836
  },
  {
    author: "Dante Alighieri",
    country: "Italy",
    imageLink: "../../images/the-divine-comedy.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    price: 1315
  },
  {
    author: "Unknown",
    country: "Sumer and Akkadian Empire",
    imageLink: "../../images/the-epic-of-gilgamesh.jpg",
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    price: 1700
  },
  {
    author: "Unknown",
    country: "Achaemenid Empire",
    imageLink: "../../images/the-book-of-job.jpg",
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    price: 600
  },
  {
    author: "Unknown",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "../../images/one-thousand-and-one-nights.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    price: 1200
  },
  {
    author: "Unknown",
    country: "Iceland",
    imageLink: "../../images/njals-saga.jpg",
    language: "Old Norse",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    pages: 384,
    title: "Nj\u00e1l's Saga",
    price: 1350
  },
  {
    author: "Jane Austen",
    country: "United Kingdom",
    imageLink: "../../images/pride-and-prejudice.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    pages: 226,
    title: "Pride and Prejudice",
    price: 1813
  },
  {
    author: "Honor\u00e9 de Balzac",
    country: "France",
    imageLink: "../../images/le-pere-goriot.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    pages: 443,
    title: "Le P\u00e8re Goriot",
    price: 1835
  },
  {
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    imageLink: "../../images/molloy-malone-dies-the-unnamable.jpg",
    language: "French, English",
    link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    pages: 256,
    title: "Molloy, Malone Dies, The Unnamable, the trilogy",
    price: 1952
  },
  {
    author: "Giovanni Boccaccio",
    country: "Italy",
    imageLink: "../../images/the-decameron.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/The_Decameron\n",
    pages: 1024,
    title: "The Decameron",
    price: 1351
  },
  {
    author: "Jorge Luis Borges",
    country: "Argentina",
    imageLink: "../../images/ficciones.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Ficciones\n",
    pages: 224,
    title: "Ficciones",
    price: 1965
  },
  {
    author: "Emily Bront\u00eb",
    country: "United Kingdom",
    imageLink: "../../images/wuthering-heights.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
    pages: 342,
    title: "Wuthering Heights",
    price: 1847
  },
  {
    author: "Albert Camus",
    country: "Algeria, French Empire",
    imageLink: "../../images/l-etranger.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
    pages: 185,
    title: "The Stranger",
    price: 1942
  },
  {
    author: "Paul Celan",
    country: "Romania, France",
    imageLink: "../../images/poems-paul-celan.jpg",
    language: "German",
    link: "\n",
    pages: 320,
    title: "Poems",
    price: 1952
  },
  {
    author: "Louis-Ferdinand C\u00e9line",
    country: "France",
    imageLink: "../../images/voyage-au-bout-de-la-nuit.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
    pages: 505,
    title: "Journey to the End of the Night",
    price: 1932
  },
  {
    author: "Miguel de Cervantes",
    country: "Spain",
    imageLink: "../../images/don-quijote-de-la-mancha.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Don_Quixote\n",
    pages: 1056,
    title: "Don Quijote De La Mancha",
    price: 1610
  },
  {
    author: "Geoffrey Chaucer",
    country: "England",
    imageLink: "../../images/the-canterbury-tales.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
    pages: 544,
    title: "The Canterbury Tales",
    price: 1450
  },
  {
    author: "Anton Chekhov",
    country: "Russia",
    imageLink: "../../images/stories-of-anton-chekhov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov\n",
    pages: 194,
    title: "Stories",
    price: 1886
  },
  {
    author: "Joseph Conrad",
    country: "United Kingdom",
    imageLink: "../../images/nostromo.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nostromo\n",
    pages: 320,
    title: "Nostromo",
    price: 1904
  },
  {
    author: "Charles Dickens",
    country: "United Kingdom",
    imageLink: "../../images/great-expectations.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Great_Expectations\n",
    pages: 194,
    title: "Great Expectations",
    price: 1861
  },
  {
    author: "Denis Diderot",
    country: "France",
    imageLink: "../../images/jacques-the-fatalist.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Jacques_the_Fatalist\n",
    pages: 596,
    title: "Jacques the Fatalist",
    price: 1796
  },
  {
    author: "Alfred D\u00f6blin",
    country: "Germany",
    imageLink: "../../images/berlin-alexanderplatz.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz\n",
    pages: 600,
    title: "Berlin Alexanderplatz",
    price: 1929
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "../../images/crime-and-punishment.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Crime_and_Punishment\n",
    pages: 551,
    title: "Crime and Punishment",
    price: 1866
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "../../images/the-idiot.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Idiot\n",
    pages: 656,
    title: "The Idiot",
    price: 1869
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "../../images/the-possessed.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)\n",
    pages: 768,
    title: "The Possessed",
    price: 1872
  },
  {
    author: "Fyodor Dostoevsky",
    country: "Russia",
    imageLink: "../../images/the-brothers-karamazov.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Brothers_Karamazov\n",
    pages: 824,
    title: "The Brothers Karamazov",
    price: 1880
  },
  {
    author: "George Eliot",
    country: "United Kingdom",
    imageLink: "../../images/middlemarch.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Middlemarch\n",
    pages: 800,
    title: "Middlemarch",
    price: 1871
  },
  {
    author: "Ralph Ellison",
    country: "United States",
    imageLink: "../../images/invisible-man.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Invisible_Man\n",
    pages: 581,
    title: "Invisible Man",
    price: 1952
  },
  {
    author: "Euripides",
    country: "Greece",
    imageLink: "../../images/medea.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Medea_(play)\n",
    pages: 104,
    title: "Medea",
    price: 431
  },
  {
    author: "William Faulkner",
    country: "United States",
    imageLink: "../../images/absalom-absalom.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Absalom,_Absalom!\n",
    pages: 313,
    title: "Absalom, Absalom!",
    price: 1936
  },
  {
    author: "William Faulkner",
    country: "United States",
    imageLink: "../../images/the-sound-and-the-fury.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Sound_and_the_Fury\n",
    pages: 326,
    title: "The Sound and the Fury",
    price: 1929
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "../../images/madame-bovary.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Madame_Bovary\n",
    pages: 528,
    title: "Madame Bovary",
    price: 1857
  },
  {
    author: "Gustave Flaubert",
    country: "France",
    imageLink: "../../images/l-education-sentimentale.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Sentimental_Education\n",
    pages: 606,
    title: "Sentimental Education",
    price: 1869
  },
  {
    author: "Federico Garc\u00eda Lorca",
    country: "Spain",
    imageLink: "../../images/gypsy-ballads.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Gypsy_Ballads\n",
    pages: 218,
    title: "Gypsy Ballads",
    price: 1928
  },
  {
    author: "Gabriel Garc\u00eda M\u00e1rquez",
    country: "Colombia",
    imageLink: "../../images/one-hundred-prices-of-solitude.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/One_Hundred_prices_of_Solitude\n",
    pages: 417,
    title: "One Hundred prices of Solitude",
    price: 1967
  },
  {
    author: "Gabriel Garc\u00eda M\u00e1rquez",
    country: "Colombia",
    imageLink: "../../images/love-in-the-time-of-cholera.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Love_in_the_Time_of_Cholera\n",
    pages: 368,
    title: "Love in the Time of Cholera",
    price: 1985
  },
  {
    author: "Johann Wolfgang von Goethe",
    country: "Saxe-Weimar",
    imageLink: "../../images/faust.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Goethe%27s_Faust\n",
    pages: 158,
    title: "Faust",
    price: 1832
  },
  {
    author: "Nikolai Gogol",
    country: "Russia",
    imageLink: "../../images/dead-souls.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Dead_Souls\n",
    pages: 432,
    title: "Dead Souls",
    price: 1842
  },
  {
    author: "G\u00fcnter Grass",
    country: "Germany",
    imageLink: "../../images/the-tin-drum.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Tin_Drum\n",
    pages: 600,
    title: "The Tin Drum",
    price: 1959
  },
  {
    author: "Jo\u00e3o Guimar\u00e3es Rosa",
    country: "Brazil",
    imageLink: "../../images/the-devil-to-pay-in-the-backlands.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Devil_to_Pay_in_the_Backlands\n",
    pages: 494,
    title: "The Devil to Pay in the Backlands",
    price: 1956
  },
  {
    author: "Knut Hamsun",
    country: "Norway",
    imageLink: "../../images/hunger.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/Hunger_(Hamsun_novel)\n",
    pages: 176,
    title: "Hunger",
    price: 1890
  },
  {
    author: "Ernest Hemingway",
    country: "United States",
    imageLink: "../../images/the-old-man-and-the-sea.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea\n",
    pages: 128,
    title: "The Old Man and the Sea",
    price: 1952
  },
  {
    author: "Homer",
    country: "Greece",
    imageLink: "../../images/the-iliad-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Iliad\n",
    pages: 608,
    title: "Iliad",
    price: 735
  },
  {
    author: "Homer",
    country: "Greece",
    imageLink: "../../images/the-odyssey-of-homer.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Odyssey\n",
    pages: 374,
    title: "Odyssey",
    price: 800
  },
  {
    author: "Henrik Ibsen",
    country: "Norway",
    imageLink: "../../images/a-Dolls-house.jpg",
    language: "Norwegian",
    link: "https://en.wikipedia.org/wiki/A_Doll%27s_House\n",
    pages: 68,
    title: "A Doll's House",
    price: 1879
  },
  {
    author: "James Joyce",
    country: "Irish Free State",
    imageLink: "../../images/ulysses.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Ulysses_(novel)\n",
    pages: 228,
    title: "Ulysses",
    price: 1922
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "../../images/stories-of-franz-kafka.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Franz_Kafka_bibliography#Short_stories\n",
    pages: 488,
    title: "Stories",
    price: 1924
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "../../images/the-trial.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Trial\n",
    pages: 160,
    title: "The Trial",
    price: 1925
  },
  {
    author: "Franz Kafka",
    country: "Czechoslovakia",
    imageLink: "../../images/the-castle.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Castle_(novel)\n",
    pages: 352,
    title: "The Castle",
    price: 1926
  },
  {
    author: "K\u0101lid\u0101sa",
    country: "India",
    imageLink: "../../images/the-recognition-of-shakuntala.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Abhij%C3%B1%C4%81na%C5%9B%C4%81kuntalam\n",
    pages: 147,
    title: "The recognition of Shakuntala",
    price: 150
  },
  {
    author: "Yasunari Kawabata",
    country: "Japan",
    imageLink: "../../images/the-sound-of-the-mountain.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Sound_of_the_Mountain\n",
    pages: 288,
    title: "The Sound of the Mountain",
    price: 1954
  },
  {
    author: "Nikos Kazantzakis",
    country: "Greece",
    imageLink: "../../images/zorba-the-greek.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Zorba_the_Greek\n",
    pages: 368,
    title: "Zorba the Greek",
    price: 1946
  },
  {
    author: "D. H. Lawrence",
    country: "United Kingdom",
    imageLink: "../../images/sons-and-lovers.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Sons_and_Lovers\n",
    pages: 432,
    title: "Sons and Lovers",
    price: 1913
  },
  {
    author: "Halld\u00f3r Laxness",
    country: "Iceland",
    imageLink: "../../images/independent-people.jpg",
    language: "Icelandic",
    link: "https://en.wikipedia.org/wiki/Independent_People\n",
    pages: 470,
    title: "Independent People",
    price: 1934
  },
  {
    author: "Giacomo Leopardi",
    country: "Italy",
    imageLink: "../../images/poems-giacomo-leopardi.jpg",
    language: "Italian",
    link: "\n",
    pages: 184,
    title: "Poems",
    price: 1818
  },
  {
    author: "Doris Lessing",
    country: "United Kingdom",
    imageLink: "../../images/the-golden-notebook.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Golden_Notebook\n",
    pages: 688,
    title: "The Golden Notebook",
    price: 1962
  },
  {
    author: "Astrid Lindgren",
    country: "Sweden",
    imageLink: "../../images/pippi-longstocking.jpg",
    language: "Swedish",
    link: "https://en.wikipedia.org/wiki/Pippi_Longstocking\n",
    pages: 160,
    title: "Pippi Longstocking",
    price: 1945
  },
  {
    author: "Lu Xun",
    country: "China",
    imageLink: "../../images/diary-of-a-madman.jpg",
    language: "Chinese",
    link: "https://en.wikipedia.org/wiki/A_Madman%27s_Diary\n",
    pages: 389,
    title: "Diary of a Madman",
    price: 1918
  },
  {
    author: "Naguib Mahfouz",
    country: "Egypt",
    imageLink: "../../images/children-of-gebelawi.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Children_of_Gebelawi\n",
    pages: 355,
    title: "Children of Gebelawi",
    price: 1959
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "../../images/buddenbrooks.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/Buddenbrooks\n",
    pages: 736,
    title: "Buddenbrooks",
    price: 1901
  },
  {
    author: "Thomas Mann",
    country: "Germany",
    imageLink: "../../images/the-magic-mountain.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Magic_Mountain\n",
    pages: 720,
    title: "The Magic Mountain",
    price: 1924
  },
  {
    author: "Herman Melville",
    country: "United States",
    imageLink: "../../images/moby-dick.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Moby-Dick\n",
    pages: 378,
    title: "Moby Dick",
    price: 1851
  },
  {
    author: "Michel de Montaigne",
    country: "France",
    imageLink: "../../images/essais.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Essays_(Montaigne)\n",
    pages: 404,
    title: "Essays",
    price: 1595
  },
  {
    author: "Elsa Morante",
    country: "Italy",
    imageLink: "../../images/history.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/History_(novel)\n",
    pages: 600,
    title: "History",
    price: 1974
  },
  {
    author: "Toni Morrison",
    country: "United States",
    imageLink: "../../images/beloved.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Beloved_(novel)\n",
    pages: 321,
    title: "Beloved",
    price: 1987
  },
  {
    author: "Murasaki Shikibu",
    country: "Japan",
    imageLink: "../../images/the-tale-of-genji.jpg",
    language: "Japanese",
    link: "https://en.wikipedia.org/wiki/The_Tale_of_Genji\n",
    pages: 1360,
    title: "The Tale of Genji",
    price: 1006
  },
  {
    author: "Robert Musil",
    country: "Austria",
    imageLink: "../../images/the-man-without-qualities.jpg",
    language: "German",
    link: "https://en.wikipedia.org/wiki/The_Man_Without_Qualities\n",
    pages: 365,
    title: "The Man Without Qualities",
    price: 1931
  },
  {
    author: "Vladimir Nabokov",
    country: "Russia/United States",
    imageLink: "../../images/lolita.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Lolita\n",
    pages: 317,
    title: "Lolita",
    price: 1955
  },
  {
    author: "George Orwell",
    country: "United Kingdom",
    imageLink: "../../images/nineteen-eighty-four.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four\n",
    pages: 272,
    title: "Nineteen Eighty-Four",
    price: 1949
  },
  {
    author: "Ovid",
    country: "Roman Empire",
    imageLink: "../../images/the-metamorphoses-of-ovid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Metamorphoses\n",
    pages: 576,
    title: "Metamorphoses",
    price: 100
  },
  {
    author: "Fernando Pessoa",
    country: "Portugal",
    imageLink: "../../images/the-book-of-disquiet.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/The_Book_of_Disquiet\n",
    pages: 272,
    title: "The Book of Disquiet",
    price: 1928
  },
  {
    author: "Edgar Allan Poe",
    country: "United States",
    imageLink: "../../images/tales-and-poems-of-edgar-allan-poe.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Edgar_Allan_Poe_bibliography#Tales\n",
    pages: 842,
    title: "Tales",
    price: 1950
  },
  {
    author: "Marcel Proust",
    country: "France",
    imageLink: "../../images/a-la-recherche-du-temps-perdu.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/In_Search_of_Lost_Time\n",
    pages: 2408,
    title: "In Search of Lost Time",
    price: 1920
  },
  {
    author: "Fran\u00e7ois Rabelais",
    country: "France",
    imageLink: "../../images/gargantua-and-pantagruel.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Gargantua_and_Pantagruel\n",
    pages: 623,
    title: "Gargantua and Pantagruel",
    price: 1533
  },
  {
    author: "Juan Rulfo",
    country: "Mexico",
    imageLink: "../../images/pedro-paramo.jpg",
    language: "Spanish",
    link: "https://en.wikipedia.org/wiki/Pedro_P%C3%A1ramo\n",
    pages: 124,
    title: "Pedro P\u00e1ramo",
    price: 1955
  },
  {
    author: "Rumi",
    country: "Sultanate of Rum",
    imageLink: "../../images/the-masnavi.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Masnavi\n",
    pages: 438,
    title: "The Masnavi",
    price: 1236
  },
  {
    author: "Salman Rushdie",
    country: "United Kingdom, India",
    imageLink: "../../images/midnights-children.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Midnight%27s_Children\n",
    pages: 536,
    title: "Midnight's Children",
    price: 1981
  },
  {
    author: "Saadi",
    country: "Persia, Persian Empire",
    imageLink: "../../images/bostan.jpg",
    language: "Persian",
    link: "https://en.wikipedia.org/wiki/Bustan_(book)\n",
    pages: 298,
    title: "Bostan",
    price: 1257
  },
  {
    author: "Tayeb Salih",
    country: "Sudan",
    imageLink: "../../images/season-of-migration-to-the-north.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/Season_of_Migration_to_the_North\n",
    pages: 139,
    title: "Season of Migration to the North",
    price: 1966
  },
  {
    author: "Jos\u00e9 Saramago",
    country: "Portugal",
    imageLink: "../../images/blindness.jpg",
    language: "Portuguese",
    link: "https://en.wikipedia.org/wiki/Blindness_(novel)\n",
    pages: 352,
    title: "Blindness",
    price: 1995
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "../../images/hamlet.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Hamlet\n",
    pages: 432,
    title: "Hamlet",
    price: 1603
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "../../images/king-lear.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/King_Lear\n",
    pages: 384,
    title: "King Lear",
    price: 1608
  },
  {
    author: "William Shakespeare",
    country: "England",
    imageLink: "../../images/othello.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Othello\n",
    pages: 314,
    title: "Othello",
    price: 1609
  },
  {
    author: "Sophocles",
    country: "Greece",
    imageLink: "../../images/oedipus-the-king.jpg",
    language: "Greek",
    link: "https://en.wikipedia.org/wiki/Oedipus_the_King\n",
    pages: 88,
    title: "Oedipus the King",
    price: 430
  },
  {
    author: "Stendhal",
    country: "France",
    imageLink: "../../images/le-rouge-et-le-noir.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/The_Red_and_the_Black\n",
    pages: 576,
    title: "The Red and the Black",
    price: 1830
  },
  {
    author: "Laurence Sterne",
    country: "England",
    imageLink: "../../images/the-life-and-opinions-of-tristram-shandy.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Life_and_Opinions_of_Tristram_Shandy,_Gentleman\n",
    pages: 640,
    title: "The Life And Opinions of Tristram Shandy",
    price: 1760
  },
  {
    author: "Italo Svevo",
    country: "Italy",
    imageLink: "../../images/confessions-of-zeno.jpg",
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Zeno%27s_Conscience\n",
    pages: 412,
    title: "Confessions of Zeno",
    price: 1923
  },
  {
    author: "Jonathan Swift",
    country: "Ireland",
    imageLink: "../../images/gullivers-travels.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Gulliver%27s_Travels\n",
    pages: 178,
    title: "Gulliver's Travels",
    price: 1726
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "../../images/war-and-peace.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/War_and_Peace\n",
    pages: 1296,
    title: "War and Peace",
    price: 1867
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "../../images/anna-karenina.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/Anna_Karenina\n",
    pages: 864,
    title: "Anna Karenina",
    price: 1877
  },
  {
    author: "Leo Tolstoy",
    country: "Russia",
    imageLink: "../../images/the-death-of-ivan-ilyich.jpg",
    language: "Russian",
    link: "https://en.wikipedia.org/wiki/The_Death_of_Ivan_Ilyich\n",
    pages: 92,
    title: "The Death of Ivan Ilyich",
    price: 1886
  },
  {
    author: "Mark Twain",
    country: "United States",
    imageLink: "../../images/the-adventures-of-huckleberry-finn.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Adventures_of_Huckleberry_Finn\n",
    pages: 224,
    title: "The Adventures of Huckleberry Finn",
    price: 1884
  },
  {
    author: "Valmiki",
    country: "India",
    imageLink: "../../images/ramayana.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Ramayana\n",
    pages: 152,
    title: "Ramayana",
    price: 450
  },
  {
    author: "Virgil",
    country: "Roman Empire",
    imageLink: "../../images/the-aeneid.jpg",
    language: "Classical Latin",
    link: "https://en.wikipedia.org/wiki/Aeneid\n",
    pages: 442,
    title: "The Aeneid",
    price: 23
  },
  {
    author: "Vyasa",
    country: "India",
    imageLink: "../../images/the-mahab-harata.jpg",
    language: "Sanskrit",
    link: "https://en.wikipedia.org/wiki/Mahabharata\n",
    pages: 276,
    title: "Mahabharata",
    price: 700
  },
  {
    author: "Walt Whitman",
    country: "United States",
    imageLink: "../../images/leaves-of-grass.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Leaves_of_Grass\n",
    pages: 152,
    title: "Leaves of Grass",
    price: 1855
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "../../images/mrs-dalloway.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Mrs_Dalloway\n",
    pages: 216,
    title: "Mrs Dalloway",
    price: 1925
  },
  {
    author: "Virginia Woolf",
    country: "United Kingdom",
    imageLink: "../../images/to-the-lighthouse.jpg",
    language: "English",
    link: "https://en.wikipedia.org/wiki/To_the_Lighthouse\n",
    pages: 209,
    title: "To the Lighthouse",
    price: 1927
  },
  {
    author: "Marguerite Yourcenar",
    country: "France/Belgium",
    imageLink: "../../images/memoirs-of-hadrian.jpg",
    language: "French",
    link: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian\n",
    pages: 408,
    title: "Memoirs of Hadrian",
    price: 1951
  }
]

export const books = booksArray.map((book, index) => {
  return { id: index + 1, ...book };
});