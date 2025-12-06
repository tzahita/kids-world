export interface HebrewLetter {
  char: string;
  name: string;
  word: string;
  translation: string;
  emoji: string;
}

export const HEBREW_LETTERS: HebrewLetter[] = [
  // Alef
  { char: 'א', name: 'Alef', word: 'אַרְיֵה', translation: 'Lion', emoji: '🦁' },
  { char: 'א', name: 'Alef', word: 'אֲבַטִּיחַ', translation: 'Watermelon', emoji: '🍉' },
  { char: 'א', name: 'Alef', word: 'אֲנָנָס', translation: 'Pineapple', emoji: '🍍' },
  { char: 'א', name: 'Alef', word: 'אוֹטוֹ', translation: 'Car', emoji: '🚗' },
  { char: 'א', name: 'Alef', word: 'אַרְנָב', translation: 'Rabbit', emoji: '🐇' },

  // Bet
  { char: 'ב', name: 'Bet', word: 'בַּנָּנָה', translation: 'Banana', emoji: '🍌' },
  { char: 'ב', name: 'Bet', word: 'בַּיִת', translation: 'House', emoji: '🏠' },
  { char: 'ב', name: 'Bet', word: 'בַּלּוֹן', translation: 'Balloon', emoji: '🎈' },
  { char: 'ב', name: 'Bet', word: 'בַּרְוָז', translation: 'Duck', emoji: '🦆' },
  { char: 'ב', name: 'Bet', word: 'בֻּבָּה', translation: 'Doll', emoji: '🎎' },

  // Gimel
  { char: 'ג', name: 'Gimel', word: 'גָּמָל', translation: 'Camel', emoji: '🐫' },
  { char: 'ג', name: 'Gimel', word: 'גְּלִידָה', translation: 'Ice Cream', emoji: '🍦' },
  { char: 'ג', name: 'Gimel', word: 'גִּ\'ירָפָה', translation: 'Giraffe', emoji: '🦒' },
  { char: 'ג', name: 'Gimel', word: 'גֶּזֶר', translation: 'Carrot', emoji: '🥕' },
  { char: 'ג', name: 'Gimel', word: 'גִּיטָרָה', translation: 'Guitar', emoji: '🎸' },

  // Dalet
  { char: 'ד', name: 'Dalet', word: 'דֶּלֶת', translation: 'Door', emoji: '🚪' },
  { char: 'ד', name: 'Dalet', word: 'דָּג', translation: 'Fish', emoji: '🐟' },
  { char: 'ד', name: 'Dalet', word: 'דּוּבְדְּבָן', translation: 'Cherry', emoji: '🍒' },
  { char: 'ד', name: 'Dalet', word: 'דֹּב', translation: 'Bear', emoji: '🐻' },
  { char: 'ד', name: 'Dalet', word: 'דְּבוֹרָה', translation: 'Bee', emoji: '🐝' },

  // Hey
  { char: 'ה', name: 'Hey', word: 'הַר', translation: 'Mountain', emoji: '🏔️' },
  { char: 'ה', name: 'Hey', word: 'הִיפּוֹפּוֹטָם', translation: 'Hippo', emoji: '🦛' },
  { char: 'ה', name: 'Hey', word: 'הֵלִיקוֹפְּטֵר', translation: 'Helicopter', emoji: '🚁' },
  { char: 'ה', name: 'Hey', word: 'הַמְבּוּרְגֵּר', translation: 'Hamburger', emoji: '🍔' },
  { char: 'ה', name: 'Hey', word: 'הַפְתָּעָה', translation: 'Gift', emoji: '🎁' },

  // Vav
  { char: 'ו', name: 'Vav', word: 'וֶרֶד', translation: 'Rose', emoji: '🌹' },
  { char: 'ו', name: 'Vav', word: 'וֶסְפָּה', translation: 'Scooter', emoji: '🛵' },
  { char: 'ו', name: 'Vav', word: 'וָפֶל', translation: 'Waffle', emoji: '🧇' },
  { char: 'ו', name: 'Vav', word: 'וָו', translation: 'Hook', emoji: '🪝' },
  { char: 'ו', name: 'Vav', word: 'ווֹלְקָנוֹ', translation: 'Volcano', emoji: '🌋' }, // Creative liberty

  // Zayin
  { char: 'ז', name: 'Zayin', word: 'זֶבְּרָה', translation: 'Zebra', emoji: '🦓' },
  { char: 'ז', name: 'Zayin', word: 'זַיִת', translation: 'Olive', emoji: '🫒' },
  { char: 'ז', name: 'Zayin', word: 'זְבוּב', translation: 'Fly', emoji: '🪰' },
  { char: 'ז', name: 'Zayin', word: 'זָהָב', translation: 'Medal', emoji: '🥇' },
  { char: 'ז', name: 'Zayin', word: 'זֵר', translation: 'Bouquet', emoji: '💐' },

  // Het
  { char: 'ח', name: 'Het', word: 'חָתוּל', translation: 'Cat', emoji: '🐈' },
  { char: 'ח', name: 'Het', word: 'חֲזִיר', translation: 'Pig', emoji: '🐖' },
  { char: 'ח', name: 'Het', word: 'חַלּוֹן', translation: 'Window', emoji: '🪟' },
  { char: 'ח', name: 'Het', word: 'חָלָב', translation: 'Milk', emoji: '🥛' },
  { char: 'ח', name: 'Het', word: 'חַלָּה', translation: 'Bread', emoji: '🥖' },

  // Tet
  { char: 'ט', name: 'Tet', word: 'טַוָּס', translation: 'Peacock', emoji: '🦚' },
  { char: 'ט', name: 'Tet', word: 'טֵלֵפוֹן', translation: 'Telephone', emoji: '☎️' },
  { char: 'ט', name: 'Tet', word: 'טֵלְוִיזְיָה', translation: 'TV', emoji: '📺' },
  { char: 'ט', name: 'Tet', word: 'טִיסָה', translation: 'Airplane', emoji: '✈️' },
  { char: 'ט', name: 'Tet', word: 'טַבַּעַת', translation: 'Ring', emoji: '💍' },

  // Yud
  { char: 'י', name: 'Yud', word: 'יַנְשׁוּף', translation: 'Owl', emoji: '🦉' },
  { char: 'י', name: 'Yud', word: 'יָד', translation: 'Hand', emoji: '✋' },
  { char: 'י', name: 'Yud', word: 'יָרֵחַ', translation: 'Moon', emoji: '🌙' },
  { char: 'י', name: 'Yud', word: 'יֶלֶד', translation: 'Boy', emoji: '👦' },
  { char: 'י', name: 'Yud', word: 'יַהֲלוֹם', translation: 'Diamond', emoji: '💎' },

  // Kaf
  { char: 'כ', name: 'Kaf', word: 'כֶּלֶב', translation: 'Dog', emoji: '🐕' },
  { char: 'כ', name: 'Kaf', word: 'כַּדּוּר', translation: 'Ball', emoji: '⚽' },
  { char: 'כ', name: 'Kaf', word: 'כּוֹבַע', translation: 'Hat', emoji: '👒' },
  { char: 'כ', name: 'Kaf', word: 'כִּסֵּא', translation: 'Chair', emoji: '🪑' },
  { char: 'כ', name: 'Kaf', word: 'כּוֹס', translation: 'Cup', emoji: '🥛' },

  // Lamed
  { char: 'ל', name: 'Lamed', word: 'לִימוֹן', translation: 'Lemon', emoji: '🍋' },
  { char: 'ל', name: 'Lamed', word: 'לֵב', translation: 'Heart', emoji: '❤️' },
  { char: 'ל', name: 'Lamed', word: 'לִוְיָתָן', translation: 'Whale', emoji: '🐋' },
  { char: 'ל', name: 'Lamed', word: 'לֶחֶם', translation: 'Bread', emoji: '🍞' },
  { char: 'ל', name: 'Lamed', word: 'לְבֵנָה', translation: 'Brick', emoji: '🧱' },

  // Mem
  { char: 'מ', name: 'Mem', word: 'מַפְתֵּחַ', translation: 'Key', emoji: '🔑' },
  { char: 'מ', name: 'Mem', word: 'מַיִם', translation: 'Water', emoji: '💧' },
  { char: 'מ', name: 'Mem', word: 'מְכוֹנִית', translation: 'Car', emoji: '🚙' },
  { char: 'מ', name: 'Mem', word: 'מֶלֶךְ', translation: 'King', emoji: '👑' },
  { char: 'מ', name: 'Mem', word: 'מַתָּנָה', translation: 'Gift', emoji: '🎁' },

  // Nun
  { char: 'נ', name: 'Nun', word: 'נָחָשׁ', translation: 'Snake', emoji: '🐍' },
  { char: 'נ', name: 'Nun', word: 'נֵר', translation: 'Candle', emoji: '🕯️' },
  { char: 'נ', name: 'Nun', word: 'נְמָלָה', translation: 'Ant', emoji: '🐜' },
  { char: 'נ', name: 'Nun', word: 'נָמֵר', translation: 'Leopard', emoji: '🐆' },
  { char: 'נ', name: 'Nun', word: 'נַעַל', translation: 'Shoe', emoji: '👞' },

  // Samekh
  { char: 'ס', name: 'Samekh', word: 'סוּס', translation: 'Horse', emoji: '🐎' },
  { char: 'ס', name: 'Samekh', word: 'סֵפֶר', translation: 'Book', emoji: '📖' },
  { char: 'ס', name: 'Samekh', word: 'סֻכָּרִיָּה', translation: 'Candy', emoji: '🍬' },
  { char: 'ס', name: 'Samekh', word: 'סוּפְגָּנִיָּה', translation: 'Donut', emoji: '🍩' },
  { char: 'ס', name: 'Samekh', word: 'סַבּוֹן', translation: 'Soap', emoji: '🧼' },

  // Ayin
  { char: 'ע', name: 'Ayin', word: 'עֵץ', translation: 'Tree', emoji: '🌳' },
  { char: 'ע', name: 'Ayin', word: 'עַיִן', translation: 'Eye', emoji: '👁️' },
  { char: 'ע', name: 'Ayin', word: 'עֻגָה', translation: 'Cake', emoji: '🎂' },
  { char: 'ע', name: 'Ayin', word: 'עִפָּרוֹן', translation: 'Pencil', emoji: '✏️' },
  { char: 'ע', name: 'Ayin', word: 'עַכְבָּר', translation: 'Mouse', emoji: '🐁' },

  // Pey
  { char: 'פ', name: 'Pey', word: 'פִּיל', translation: 'Elephant', emoji: '🐘' },
  { char: 'פ', name: 'Pey', word: 'פַּרְפַּר', translation: 'Butterfly', emoji: '🦋' },
  { char: 'פ', name: 'Pey', word: 'פְּרָח', translation: 'Flower', emoji: '🌸' },
  { char: 'פ', name: 'Pey', word: 'פָּרָה', translation: 'Cow', emoji: '🐄' },
  { char: 'פ', name: 'Pey', word: 'פִּיצָה', translation: 'Pizza', emoji: '🍕' },

  // Tsadik
  { char: 'צ', name: 'Tsadik', word: 'צָב', translation: 'Turtle', emoji: '🐢' },
  { char: 'צ', name: 'Tsadik', word: 'צִפּוֹר', translation: 'Bird', emoji: '🐦' },
  { char: 'צ', name: 'Tsadik', word: 'צְפַרְדֵּעַ', translation: 'Frog', emoji: '🐸' },
  { char: 'צ', name: 'Tsadik', word: 'צַלַּחַת', translation: 'Plate', emoji: '🍽️' },
  { char: 'צ', name: 'Tsadik', word: 'צְבָעִים', translation: 'Paint', emoji: '🎨' },

  // Kuf
  { char: 'ק', name: 'Kuf', word: 'קוֹף', translation: 'Monkey', emoji: '🐒' },
  { char: 'ק', name: 'Kuf', word: 'קִיפּוֹד', translation: 'Hedgehog', emoji: '🦔' },
  { char: 'ק', name: 'Kuf', word: 'קַרְנַף', translation: 'Rhino', emoji: '🦏' },
  { char: 'ק', name: 'Kuf', word: 'קִיָּאק', translation: 'Canoe', emoji: '🛶' },
  { char: 'ק', name: 'Kuf', word: 'קוּבִיָּה', translation: 'Die', emoji: '🎲' },

  // Resh
  { char: 'ר', name: 'Resh', word: 'רַכֶּבֶת', translation: 'Train', emoji: '🚂' },
  { char: 'ר', name: 'Resh', word: 'רַמְזוֹר', translation: 'Traffic Light', emoji: '🚦' },
  { char: 'ר', name: 'Resh', word: 'רֶגֶל', translation: 'Foot', emoji: '🦶' },
  { char: 'ר', name: 'Resh', word: 'רְאִי', translation: 'Mirror', emoji: '🪞' },
  { char: 'ר', name: 'Resh', word: 'רַדְיוֹ', translation: 'Radio', emoji: '📻' },

  // Shin
  { char: 'ש', name: 'Shin', word: 'שֶׁמֶשׁ', translation: 'Sun', emoji: '☀️' },
  { char: 'ש', name: 'Shin', word: 'שָׁעוֹן', translation: 'Watch', emoji: '⌚' },
  { char: 'ש', name: 'Shin', word: 'שׁוֹקוֹלָד', translation: 'Chocolate', emoji: '🍫' },
  { char: 'ש', name: 'Shin', word: 'שׁוּעָל', translation: 'Fox', emoji: '🦊' },
  { char: 'ש', name: 'Shin', word: 'שׁוֹטֵר', translation: 'Police', emoji: '👮' },

  // Tav
  { char: 'ת', name: 'Tav', word: 'תּוּת', translation: 'Strawberry', emoji: '🍓' },
  { char: 'ת', name: 'Tav', word: 'תַּפּוּחַ', translation: 'Apple', emoji: '🍎' },
  { char: 'ת', name: 'Tav', word: 'תִּיק', translation: 'Bag', emoji: '🎒' },
  { char: 'ת', name: 'Tav', word: 'תִּינוֹק', translation: 'Baby', emoji: '👶' },
  { char: 'ת', name: 'Tav', word: 'תֹּף', translation: 'Drum', emoji: '🥁' },
];

export interface WordSearchLevel {
  id: string;
  title: string;
  gridSize: number; // 6x6, 8x8 etc
  words: { word: string; emoji: string }[];
}

const HEBREW_WORD_SEARCH: WordSearchLevel[] = [
  {
    id: 'animals-easy',
    title: 'חיות (קל)',
    gridSize: 6,
    words: [
      { word: 'פיל', emoji: '🐘' },
      { word: 'אריה', emoji: '🦁' },
      { word: 'פרה', emoji: '🐄' },
      { word: 'גמל', emoji: '🐫' },
      { word: 'דג', emoji: '🐟' },
    ]
  },
  {
    id: 'food-easy',
    title: 'אוכל (קל)',
    gridSize: 7,
    words: [
      { word: 'פיצה', emoji: '🍕' },
      { word: 'לחם', emoji: '🍞' },
      { word: 'חלב', emoji: '🥛' },
      { word: 'תפוח', emoji: '🍎' },
      { word: 'גלידה', emoji: '🍦' },
    ]
  },
  {
    id: 'nature-easy',
    title: 'טבע (קל)',
    gridSize: 7,
    words: [
      { word: 'שמש', emoji: '☀️' },
      { word: 'עץ', emoji: '🌳' },
      { word: 'פרח', emoji: '🌸' },
      { word: 'ים', emoji: '🌊' },
      { word: 'הר', emoji: '🏔️' },
    ]
  },
  {
    id: 'school-medium',
    title: 'בית ספר (בינוני)',
    gridSize: 8,
    words: [
      { word: 'ספר', emoji: '📚' },
      { word: 'עפרון', emoji: '✏️' },
      { word: 'ילקוט', emoji: '🎒' },
      { word: 'מורה', emoji: '👨‍🏫' },
      { word: 'לוח', emoji: '📋' },
    ]
  },
  {
    id: 'space-medium',
    title: 'חלל (בינוני)',
    gridSize: 8,
    words: [
      { word: 'חללית', emoji: '🚀' },
      { word: 'ירח', emoji: '🌙' },
      { word: 'כוכב', emoji: '⭐' },
      { word: 'שמש', emoji: '☀️' },
      { word: 'אסטרונאוט', emoji: '👩‍🚀' },
    ]
  },
  {
    id: 'home-medium',
    title: 'בבית (בינוני)',
    gridSize: 8,
    words: [
      { word: 'בית', emoji: '🏠' },
      { word: 'שולחן', emoji: '🪑' },
      { word: 'מיטה', emoji: '🛏️' },
      { word: 'חלון', emoji: '🪟' },
      { word: 'דלת', emoji: '🚪' },
    ]
  }
];
export { HEBREW_WORD_SEARCH };
