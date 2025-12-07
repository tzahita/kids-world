export interface HebrewLetter {
  char: string;
  name: string;
  word: string;
  translation: string;
  emoji: string;
  category?: string;
}

export const HEBREW_LETTERS: HebrewLetter[] = [
  // Alef
  { char: 'א', name: 'Alef', word: 'אַרְיֵה', translation: 'Lion', emoji: '🦁', category: 'חיה' },
  { char: 'א', name: 'Alef', word: 'אֲבַטִּיחַ', translation: 'Watermelon', emoji: '🍉', category: 'אוכל' },
  { char: 'א', name: 'Alef', word: 'אֲנָנָס', translation: 'Pineapple', emoji: '🍍', category: 'אוכל' },
  { char: 'א', name: 'Alef', word: 'אוֹטוֹ', translation: 'Car', emoji: '🚗', category: 'תחבורה' },
  { char: 'א', name: 'Alef', word: 'אַרְנָב', translation: 'Rabbit', emoji: '🐇', category: 'חיה' },

  // Bet
  { char: 'ב', name: 'Bet', word: 'בַּנָּנָה', translation: 'Banana', emoji: '🍌', category: 'אוכל' },
  { char: 'ב', name: 'Bet', word: 'בַּיִת', translation: 'House', emoji: '🏠', category: 'מקום' },
  { char: 'ב', name: 'Bet', word: 'בַּלּוֹן', translation: 'Balloon', emoji: '🎈', category: 'צעצוע' },
  { char: 'ב', name: 'Bet', word: 'בַּרְוָז', translation: 'Duck', emoji: '🦆', category: 'חיה' },
  { char: 'ב', name: 'Bet', word: 'בֻּבָּה', translation: 'Doll', emoji: '🎎', category: 'צעצוע' },

  // Gimel
  { char: 'ג', name: 'Gimel', word: 'גָּמָל', translation: 'Camel', emoji: '🐫', category: 'חיה' },
  { char: 'ג', name: 'Gimel', word: 'גְּלִידָה', translation: 'Ice Cream', emoji: '🍦', category: 'אוכל' },
  { char: 'ג', name: 'Gimel', word: 'גִּ\'ירָפָה', translation: 'Giraffe', emoji: '🦒', category: 'חיה' },
  { char: 'ג', name: 'Gimel', word: 'גֶּזֶר', translation: 'Carrot', emoji: '🥕', category: 'אוכל' },
  { char: 'ג', name: 'Gimel', word: 'גִּיטָרָה', translation: 'Guitar', emoji: '🎸', category: 'כלי נגינה' },

  // Dalet
  { char: 'ד', name: 'Dalet', word: 'דֶּלֶת', translation: 'Door', emoji: '🚪', category: 'בית' },
  { char: 'ד', name: 'Dalet', word: 'דָּג', translation: 'Fish', emoji: '🐟', category: 'חיה' },
  { char: 'ד', name: 'Dalet', word: 'דּוּבְדְּבָן', translation: 'Cherry', emoji: '🍒', category: 'אוכל' },
  { char: 'ד', name: 'Dalet', word: 'דֹּב', translation: 'Bear', emoji: '🐻', category: 'חיה' },
  { char: 'ד', name: 'Dalet', word: 'דְּבוֹרָה', translation: 'Bee', emoji: '🐝', category: 'חיה' },

  // Hey
  { char: 'ה', name: 'Hey', word: 'הַר', translation: 'Mountain', emoji: '🏔️', category: 'טבע' },
  { char: 'ה', name: 'Hey', word: 'הִיפּוֹפּוֹטָם', translation: 'Hippo', emoji: '🦛', category: 'חיה' },
  { char: 'ה', name: 'Hey', word: 'הֵלִיקוֹפְּטֵר', translation: 'Helicopter', emoji: '🚁', category: 'תחבורה' },
  { char: 'ה', name: 'Hey', word: 'הַמְבּוּרְגֵּר', translation: 'Hamburger', emoji: '🍔', category: 'אוכל' },
  { char: 'ה', name: 'Hey', word: 'הַפְתָּעָה', translation: 'Gift', emoji: '🎁', category: 'חפץ' },

  // Vav
  { char: 'ו', name: 'Vav', word: 'וֶרֶד', translation: 'Rose', emoji: '🌹', category: 'טבע' },
  { char: 'ו', name: 'Vav', word: 'וֶסְפָּה', translation: 'Scooter', emoji: '🛵', category: 'תחבורה' },
  { char: 'ו', name: 'Vav', word: 'וָפֶל', translation: 'Waffle', emoji: '🧇', category: 'אוכל' },
  { char: 'ו', name: 'Vav', word: 'וָו', translation: 'Hook', emoji: '🪝', category: 'חפץ' },
  { char: 'ו', name: 'Vav', word: 'ווֹלְקָנוֹ', translation: 'Volcano', emoji: '🌋', category: 'טבע' },

  // Zayin
  { char: 'ז', name: 'Zayin', word: 'זֶבְּרָה', translation: 'Zebra', emoji: '🦓', category: 'חיה' },
  { char: 'ז', name: 'Zayin', word: 'זַיִת', translation: 'Olive', emoji: '🫒', category: 'אוכל' },
  { char: 'ז', name: 'Zayin', word: 'זְבוּב', translation: 'Fly', emoji: '🪰', category: 'חיה' },
  { char: 'ז', name: 'Zayin', word: 'זָהָב', translation: 'Medal', emoji: '🥇', category: 'חפץ' },
  { char: 'ז', name: 'Zayin', word: 'זֵר', translation: 'Bouquet', emoji: '💐', category: 'טבע' },

  // Het
  { char: 'ח', name: 'Het', word: 'חָתוּל', translation: 'Cat', emoji: '🐈', category: 'חיה' },
  { char: 'ח', name: 'Het', word: 'חֲזִיר', translation: 'Pig', emoji: '🐖', category: 'חיה' },
  { char: 'ח', name: 'Het', word: 'חַלּוֹן', translation: 'Window', emoji: '🪟', category: 'בית' },
  { char: 'ח', name: 'Het', word: 'חָלָב', translation: 'Milk', emoji: '🥛', category: 'אוכל' },
  { char: 'ח', name: 'Het', word: 'חַלָּה', translation: 'Bread', emoji: '🥖', category: 'אוכל' },

  // Tet
  { char: 'ט', name: 'Tet', word: 'טַוָּס', translation: 'Peacock', emoji: '🦚', category: 'חיה' },
  { char: 'ט', name: 'Tet', word: 'טֵלֵפוֹן', translation: 'Telephone', emoji: '☎️', category: 'חפץ' },
  { char: 'ט', name: 'Tet', word: 'טֵלְוִיזְיָה', translation: 'TV', emoji: '📺', category: 'חפץ' },
  { char: 'ט', name: 'Tet', word: 'טִיסָה', translation: 'Airplane', emoji: '✈️', category: 'תחבורה' },
  { char: 'ט', name: 'Tet', word: 'טַבַּעַת', translation: 'Ring', emoji: '💍', category: 'תכשיט' },

  // Yud
  { char: 'י', name: 'Yud', word: 'יַנְשׁוּף', translation: 'Owl', emoji: '🦉', category: 'חיה' },
  { char: 'י', name: 'Yud', word: 'יָד', translation: 'Hand', emoji: '✋', category: 'גוף' },
  { char: 'י', name: 'Yud', word: 'יָרֵחַ', translation: 'Moon', emoji: '🌙', category: 'טבע' },
  { char: 'י', name: 'Yud', word: 'יֶלֶד', translation: 'Boy', emoji: '👦', category: 'אדם' },
  { char: 'י', name: 'Yud', word: 'יַהֲלוֹם', translation: 'Diamond', emoji: '💎', category: 'חפץ' },

  // Kaf
  { char: 'כ', name: 'Kaf', word: 'כֶּלֶב', translation: 'Dog', emoji: '🐕', category: 'חיה' },
  { char: 'כ', name: 'Kaf', word: 'כַּדּוּר', translation: 'Ball', emoji: '⚽', category: 'צעצוע' },
  { char: 'כ', name: 'Kaf', word: 'כּוֹבַע', translation: 'Hat', emoji: '👒', category: 'לבוש' },
  { char: 'כ', name: 'Kaf', word: 'כִּסֵּא', translation: 'Chair', emoji: '🪑', category: 'רהיט' },
  { char: 'כ', name: 'Kaf', word: 'כּוֹס', translation: 'Cup', emoji: '🥛', category: 'כלי' },

  // Lamed
  { char: 'ל', name: 'Lamed', word: 'לִימוֹן', translation: 'Lemon', emoji: '🍋', category: 'אוכל' },
  { char: 'ל', name: 'Lamed', word: 'לֵב', translation: 'Heart', emoji: '❤️', category: 'גוף' },
  { char: 'ל', name: 'Lamed', word: 'לִוְיָתָן', translation: 'Whale', emoji: '🐋', category: 'חיה' },
  { char: 'ל', name: 'Lamed', word: 'לֶחֶם', translation: 'Bread', emoji: '🍞', category: 'אוכל' },
  { char: 'ל', name: 'Lamed', word: 'לְבֵנָה', translation: 'Brick', emoji: '🧱', category: 'חפץ' },

  // Mem
  { char: 'מ', name: 'Mem', word: 'מַפְתֵּחַ', translation: 'Key', emoji: '🔑', category: 'חפץ' },
  { char: 'מ', name: 'Mem', word: 'מַיִם', translation: 'Water', emoji: '💧', category: 'טבע' },
  { char: 'מ', name: 'Mem', word: 'מְכוֹנִית', translation: 'Car', emoji: '🚙', category: 'תחבורה' },
  { char: 'מ', name: 'Mem', word: 'מֶלֶךְ', translation: 'King', emoji: '👑', category: 'אדם' },
  { char: 'מ', name: 'Mem', word: 'מַתָּנָה', translation: 'Gift', emoji: '🎁', category: 'חפץ' },

  // Nun
  { char: 'נ', name: 'Nun', word: 'נָחָשׁ', translation: 'Snake', emoji: '🐍', category: 'חיה' },
  { char: 'נ', name: 'Nun', word: 'נֵר', translation: 'Candle', emoji: '🕯️', category: 'חפץ' },
  { char: 'נ', name: 'Nun', word: 'נְמָלָה', translation: 'Ant', emoji: '🐜', category: 'חיה' },
  { char: 'נ', name: 'Nun', word: 'נָמֵר', translation: 'Leopard', emoji: '🐆', category: 'חיה' },
  { char: 'נ', name: 'Nun', word: 'נַעַל', translation: 'Shoe', emoji: '👞', category: 'לבוש' },

  // Samekh
  { char: 'ס', name: 'Samekh', word: 'סוּס', translation: 'Horse', emoji: '🐎', category: 'חיה' },
  { char: 'ס', name: 'Samekh', word: 'סֵפֶר', translation: 'Book', emoji: '📖', category: 'חפץ' },
  { char: 'ס', name: 'Samekh', word: 'סֻכָּרִיָּה', translation: 'Candy', emoji: '🍬', category: 'אוכל' },
  { char: 'ס', name: 'Samekh', word: 'סוּפְגָּנִיָּה', translation: 'Donut', emoji: '🍩', category: 'אוכל' },
  { char: 'ס', name: 'Samekh', word: 'סַבּוֹן', translation: 'Soap', emoji: '🧼', category: 'חפץ' },

  // Ayin
  { char: 'ע', name: 'Ayin', word: 'עֵץ', translation: 'Tree', emoji: '🌳', category: 'טבע' },
  { char: 'ע', name: 'Ayin', word: 'עַיִן', translation: 'Eye', emoji: '👁️', category: 'גוף' },
  { char: 'ע', name: 'Ayin', word: 'עֻגָה', translation: 'Cake', emoji: '🎂', category: 'אוכל' },
  { char: 'ע', name: 'Ayin', word: 'עִפָּרוֹן', translation: 'Pencil', emoji: '✏️', category: 'כלי כתיבה' },
  { char: 'ע', name: 'Ayin', word: 'עַכְבָּר', translation: 'Mouse', emoji: '🐁', category: 'חיה' },

  // Pey
  { char: 'פ', name: 'Pey', word: 'פִּיל', translation: 'Elephant', emoji: '🐘', category: 'חיה' },
  { char: 'פ', name: 'Pey', word: 'פַּרְפַּר', translation: 'Butterfly', emoji: '🦋', category: 'חיה' },
  { char: 'פ', name: 'Pey', word: 'פְּרָח', translation: 'Flower', emoji: '🌸', category: 'טבע' },
  { char: 'פ', name: 'Pey', word: 'פָּרָה', translation: 'Cow', emoji: '🐄', category: 'חיה' },
  { char: 'פ', name: 'Pey', word: 'פִּיצָה', translation: 'Pizza', emoji: '🍕', category: 'אוכל' },

  // Tsadik
  { char: 'צ', name: 'Tsadik', word: 'צָב', translation: 'Turtle', emoji: '🐢', category: 'חיה' },
  { char: 'צ', name: 'Tsadik', word: 'צִפּוֹר', translation: 'Bird', emoji: '🐦', category: 'חיה' },
  { char: 'צ', name: 'Tsadik', word: 'צְפַרְדֵּעַ', translation: 'Frog', emoji: '🐸', category: 'חיה' },
  { char: 'צ', name: 'Tsadik', word: 'צַלַּחַת', translation: 'Plate', emoji: '🍽️', category: 'כלי' },
  { char: 'צ', name: 'Tsadik', word: 'צְבָעִים', translation: 'Paint', emoji: '🎨', category: 'כלי' },

  // Kuf
  { char: 'ק', name: 'Kuf', word: 'קוֹף', translation: 'Monkey', emoji: '🐒', category: 'חיה' },
  { char: 'ק', name: 'Kuf', word: 'קִיפּוֹד', translation: 'Hedgehog', emoji: '🦔', category: 'חיה' },
  { char: 'ק', name: 'Kuf', word: 'קַרְנַף', translation: 'Rhino', emoji: '🦏', category: 'חיה' },
  { char: 'ק', name: 'Kuf', word: 'קִיָּאק', translation: 'Canoe', emoji: '🛶', category: 'תחבורה' },
  { char: 'ק', name: 'Kuf', word: 'קוּבִיָּה', translation: 'Die', emoji: '🎲', category: 'צעצוע' },

  // Resh
  { char: 'ר', name: 'Resh', word: 'רַכֶּבֶת', translation: 'Train', emoji: '🚂', category: 'תחבורה' },
  { char: 'ר', name: 'Resh', word: 'רַמְזוֹר', translation: 'Traffic Light', emoji: '🚦', category: 'תחבורה' },
  { char: 'ר', name: 'Resh', word: 'רֶגֶל', translation: 'Foot', emoji: '🦶', category: 'גוף' },
  { char: 'ר', name: 'Resh', word: 'רְאִי', translation: 'Mirror', emoji: '🪞', category: 'רהיט' },
  { char: 'ר', name: 'Resh', word: 'רַדְיוֹ', translation: 'Radio', emoji: '📻', category: 'מכשיר' },

  // Shin
  { char: 'ש', name: 'Shin', word: 'שֶׁמֶשׁ', translation: 'Sun', emoji: '☀️', category: 'טבע' },
  { char: 'ש', name: 'Shin', word: 'שָׁעוֹן', translation: 'Watch', emoji: '⌚', category: 'חפץ' },
  { char: 'ש', name: 'Shin', word: 'שׁוֹקוֹלָד', translation: 'Chocolate', emoji: '🍫', category: 'אוכל' },
  { char: 'ש', name: 'Shin', word: 'שׁוּעָל', translation: 'Fox', emoji: '🦊', category: 'חיה' },
  { char: 'ש', name: 'Shin', word: 'שׁוֹטֵר', translation: 'Police', emoji: '👮', category: 'אדם' },

  // Tav
  { char: 'ת', name: 'Tav', word: 'תּוּת', translation: 'Strawberry', emoji: '🍓', category: 'אוכל' },
  { char: 'ת', name: 'Tav', word: 'תַּפּוּחַ', translation: 'Apple', emoji: '🍎', category: 'אוכל' },
  { char: 'ת', name: 'Tav', word: 'תִּיק', translation: 'Bag', emoji: '🎒', category: 'חפץ' },
  { char: 'ת', name: 'Tav', word: 'תִּינוֹק', translation: 'Baby', emoji: '👶', category: 'אדם' },
  { char: 'ת', name: 'Tav', word: 'תֹּף', translation: 'Drum', emoji: '🥁', category: 'כלי נגינה' },
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
