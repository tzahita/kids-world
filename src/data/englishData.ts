export interface EnglishLetter {
  char: string;
  word: string;
  emoji: string;
}

export const ENGLISH_LETTERS: EnglishLetter[] = [
  // A
  { char: 'A', word: 'Apple', emoji: '🍎' },
  { char: 'A', word: 'Airplane', emoji: '✈️' },
  { char: 'A', word: 'Ant', emoji: '🐜' },
  { char: 'A', word: 'Alligator', emoji: '🐊' },
  { char: 'A', word: 'Ambulance', emoji: '🚑' },

  // B
  { char: 'B', word: 'Ball', emoji: '⚽' },
  { char: 'B', word: 'Bear', emoji: '🐻' },
  { char: 'B', word: 'Banana', emoji: '🍌' },
  { char: 'B', word: 'Butterfly', emoji: '🦋' },
  { char: 'B', word: 'Bus', emoji: '🚌' },

  // C
  { char: 'C', word: 'Cat', emoji: '🐈' },
  { char: 'C', word: 'Car', emoji: '🚗' },
  { char: 'C', word: 'Cake', emoji: '🎂' },
  { char: 'C', word: 'Cow', emoji: '🐄' },
  { char: 'C', word: 'Camera', emoji: '📷' },

  // D
  { char: 'D', word: 'Dog', emoji: '🐕' },
  { char: 'D', word: 'Duck', emoji: '🦆' },
  { char: 'D', word: 'Dolphin', emoji: '🐬' },
  { char: 'D', word: 'Donut', emoji: '🍩' },
  { char: 'D', word: 'Drum', emoji: '🥁' },

  // E
  { char: 'E', word: 'Elephant', emoji: '🐘' },
  { char: 'E', word: 'Egg', emoji: '🥚' },
  { char: 'E', word: 'Eagle', emoji: '🦅' },
  { char: 'E', word: 'Ear', emoji: '👂' },
  { char: 'E', word: 'Earth', emoji: '🌍' },

  // F
  { char: 'F', word: 'Fish', emoji: '🐟' },
  { char: 'F', word: 'Frog', emoji: '🐸' },
  { char: 'F', word: 'Flower', emoji: '🌸' },
  { char: 'F', word: 'Fox', emoji: '🦊' },
  { char: 'F', word: 'Fire', emoji: '🔥' },

  // G
  { char: 'G', word: 'Giraffe', emoji: '🦒' },
  { char: 'G', word: 'Goat', emoji: '🐐' },
  { char: 'G', word: 'Grapes', emoji: '🍇' },
  { char: 'G', word: 'Guitar', emoji: '🎸' },
  { char: 'G', word: 'Gift', emoji: '🎁' },

  // H
  { char: 'H', word: 'Horse', emoji: '🐎' },
  { char: 'H', word: 'House', emoji: '🏠' },
  { char: 'H', word: 'Hat', emoji: '👒' },
  { char: 'H', word: 'Heart', emoji: '❤️' },
  { char: 'H', word: 'Hamburger', emoji: '🍔' },

  // I
  { char: 'I', word: 'Ice Cream', emoji: '🍦' },
  { char: 'I', word: 'Igloo', emoji: '⛺' }, // Using tent emoji as approximation or generic structure
  { char: 'I', word: 'Ice', emoji: '🧊' },
  { char: 'I', word: 'Island', emoji: '🏝️' },
  { char: 'I', word: 'Insect', emoji: '🐞' },

  // J
  { char: 'J', word: 'Jellyfish', emoji: '🪼' },
  { char: 'J', word: 'Juice', emoji: '🧃' },
  { char: 'J', word: 'Jeans', emoji: '👖' },
  { char: 'J', word: 'Jet', emoji: '✈️' },
  { char: 'J', word: 'Juar', emoji: '🏺' }, // Jar

  // K
  { char: 'K', word: 'Kangaroo', emoji: '🦘' },
  { char: 'K', word: 'Key', emoji: '🔑' },
  { char: 'K', word: 'Kite', emoji: '🪁' },
  { char: 'K', word: 'King', emoji: '👑' },
  { char: 'K', word: 'Kiwi', emoji: '🥝' },

  // L
  { char: 'L', word: 'Lion', emoji: '🦁' },
  { char: 'L', word: 'Lemon', emoji: '🍋' },
  { char: 'L', word: 'Ladybug', emoji: '🐞' },
  { char: 'L', word: 'Leaf', emoji: '🍃' },
  { char: 'L', word: 'Lollipop', emoji: '🍭' },

  // M
  { char: 'M', word: 'Monkey', emoji: '🐒' },
  { char: 'M', word: 'Mouse', emoji: '🐁' },
  { char: 'M', word: 'Moon', emoji: '🌙' },
  { char: 'M', word: 'Milk', emoji: '🥛' },
  { char: 'M', word: 'Motorcycle', emoji: '🏍️' },

  // N
  { char: 'N', word: 'Nest', emoji: '🪹' },
  { char: 'N', word: 'Nose', emoji: '👃' },
  { char: 'N', word: 'Night', emoji: '🌃' },
  { char: 'N', word: 'Nine', emoji: '9️⃣' },
  { char: 'N', word: 'Nurse', emoji: '👩‍⚕️' },

  // O
  { char: 'O', word: 'Owl', emoji: '🦉' },
  { char: 'O', word: 'Octopus', emoji: '🐙' },
  { char: 'O', word: 'Orange', emoji: '🍊' },
  { char: 'O', word: 'Onion', emoji: '🧅' },
  { char: 'O', word: 'Ocean', emoji: '🌊' },

  // P
  { char: 'P', word: 'Pig', emoji: '🐖' },
  { char: 'P', word: 'Pizza', emoji: '🍕' },
  { char: 'P', word: 'Pencil', emoji: '✏️' },
  { char: 'P', word: 'Pumpkin', emoji: '🎃' },
  { char: 'P', word: 'Panda', emoji: '🐼' },

  // Q
  { char: 'Q', word: 'Queen', emoji: '👸' },
  { char: 'Q', word: 'Question', emoji: '❓' },
  { char: 'Q', word: 'Quiet', emoji: '🤫' },
  { char: 'Q', word: 'Quilt', emoji: '🛌' },
  { char: 'Q', word: 'Quarter', emoji: '🪙' },

  // R
  { char: 'R', word: 'Rabbit', emoji: '🐇' },
  { char: 'R', word: 'Robot', emoji: '🤖' },
  { char: 'R', word: 'Rainbow', emoji: '🌈' },
  { char: 'R', word: 'Rocket', emoji: '🚀' },
  { char: 'R', word: 'Rose', emoji: '🌹' },

  // S
  { char: 'S', word: 'Sun', emoji: '☀️' },
  { char: 'S', word: 'Snake', emoji: '🐍' },
  { char: 'S', word: 'Spider', emoji: '🕷️' },
  { char: 'S', word: 'Star', emoji: '⭐' },
  { char: 'S', word: 'Strawberry', emoji: '🍓' },

  // T
  { char: 'T', word: 'Turtle', emoji: '🐢' },
  { char: 'T', word: 'Tiger', emoji: '🐅' },
  { char: 'T', word: 'Tree', emoji: '🌳' },
  { char: 'T', word: 'Train', emoji: '🚂' },
  { char: 'T', word: 'Tomato', emoji: '🍅' },

  // U
  { char: 'U', word: 'Umbrella', emoji: '☂️' },
  { char: 'U', word: 'Unicorn', emoji: '🦄' },
  { char: 'U', word: 'Up', emoji: '⬆️' },
  { char: 'U', word: 'Under', emoji: '⬇️' }, // Approximation
  { char: 'U', word: 'Uniform', emoji: '🥋' },

  // V
  { char: 'V', word: 'Van', emoji: '🚐' },
  { char: 'V', word: 'Violin', emoji: '🎻' },
  { char: 'V', word: 'Volcano', emoji: '🌋' },
  { char: 'V', word: 'Vegetables', emoji: '🥦' },
  { char: 'V', word: 'Vase', emoji: '🏺' },

  // W
  { char: 'W', word: 'Whale', emoji: '🐋' },
  { char: 'W', word: 'Watermelon', emoji: '🍉' },
  { char: 'W', word: 'Watch', emoji: '⌚' },
  { char: 'W', word: 'Window', emoji: '🪟' },
  { char: 'W', word: 'Wolf', emoji: '🐺' },

  // X
  { char: 'X', word: 'X-ray', emoji: '🩻' },
  { char: 'X', word: 'Xylophone', emoji: '🎹' }, // Approximation
  { char: 'X', word: 'Box', emoji: '📦' }, // "Ends with X" often used for kids
  { char: 'X', word: 'Six', emoji: '6️⃣' }, // "Ends with X"
  { char: 'X', word: 'Fox', emoji: '🦊' }, // "Ends with X"

  // Y
  { char: 'Y', word: 'Yoyo', emoji: '🪀' },
  { char: 'Y', word: 'Yellow', emoji: '💛' },
  { char: 'Y', word: 'Yogurt', emoji: '🥣' },
  { char: 'Y', word: 'Yak', emoji: '🐃' },
  { char: 'Y', word: 'Yarn', emoji: '🧶' },

  // Z
  { char: 'Z', word: 'Zebra', emoji: '🦓' },
  { char: 'Z', word: 'Zoo', emoji: '🦁' },
  { char: 'Z', word: 'Zipper', emoji: '🤐' },
  { char: 'Z', word: 'Zero', emoji: '0️⃣' },
  { char: 'Z', word: 'Zigzag', emoji: '〰️' },
];

export interface WordSearchLevel {
  id: string;
  title: string;
  gridSize: number;
  words: { word: string; emoji: string }[];
}

const ENGLISH_WORD_SEARCH: WordSearchLevel[] = [
  {
    id: 'animals-easy',
    title: 'Animals (Easy)',
    gridSize: 6,
    words: [
      { word: 'CAT', emoji: '🐈' },
      { word: 'DOG', emoji: '🐕' },
      { word: 'COW', emoji: '🐄' },
      { word: 'FROG', emoji: '🐸' },
      { word: 'PIG', emoji: '🐖' },
    ]
  },
  {
    id: 'colors-easy',
    title: 'Colors (Easy)',
    gridSize: 7,
    words: [
      { word: 'RED', emoji: '🟥' },
      { word: 'BLUE', emoji: '🟦' },
      { word: 'GREEN', emoji: '🟩' },
      { word: 'PINK', emoji: '🎀' },
      { word: 'YELLOW', emoji: '💛' },
    ]
  },
  {
    id: 'nature-easy',
    title: 'Nature (Easy)',
    gridSize: 7,
    words: [
      { word: 'SUN', emoji: '☀️' },
      { word: 'TREE', emoji: '🌳' },
      { word: 'FLOWER', emoji: '🌸' },
      { word: 'RAIN', emoji: '🌧️' },
      { word: 'STAR', emoji: '⭐' },
    ]
  },
  {
    id: 'school-medium',
    title: 'School (Medium)',
    gridSize: 8,
    words: [
      { word: 'BOOK', emoji: '📚' },
      { word: 'PEN', emoji: '🖊️' },
      { word: 'DESK', emoji: '🪑' },
      { word: 'SCHOOL', emoji: '🏫' },
      { word: 'BUS', emoji: '🚌' },
    ]
  },
  {
    id: 'space-medium',
    title: 'Space (Medium)',
    gridSize: 8,
    words: [
      { word: 'MOON', emoji: '🌙' },
      { word: 'MARS', emoji: '🪐' },
      { word: 'ROCKET', emoji: '🚀' },
      { word: 'STAR', emoji: '⭐' },
      { word: 'EARTH', emoji: '🌍' },
    ]
  },
  {
    id: 'food-medium',
    title: 'Food (Medium)',
    gridSize: 8,
    words: [
      { word: 'PIZZA', emoji: '🍕' },
      { word: 'APPLE', emoji: '🍎' },
      { word: 'BREAD', emoji: '🍞' },
      { word: 'CAKE', emoji: '🎂' },
      { word: 'MILK', emoji: '🥛' },
    ]
  }
];
export { ENGLISH_WORD_SEARCH };
