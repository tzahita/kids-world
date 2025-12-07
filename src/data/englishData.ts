export interface EnglishLetter {
  char: string;
  word: string;
  emoji: string;
  name?: string;
  category?: string;
}

export const ENGLISH_LETTERS: EnglishLetter[] = [
  // A
  { char: 'A', word: 'Apple', emoji: '🍎', category: 'Food' },
  { char: 'A', word: 'Airplane', emoji: '✈️', category: 'Transport' },
  { char: 'A', word: 'Ant', emoji: '🐜', category: 'Animal' },
  { char: 'A', word: 'Alligator', emoji: '🐊', category: 'Animal' },
  { char: 'A', word: 'Ambulance', emoji: '🚑', category: 'Transport' },

  // B
  { char: 'B', word: 'Ball', emoji: '⚽', category: 'Toy' },
  { char: 'B', word: 'Bear', emoji: '🐻', category: 'Animal' },
  { char: 'B', word: 'Banana', emoji: '🍌', category: 'Food' },
  { char: 'B', word: 'Butterfly', emoji: '🦋', category: 'Animal' },
  { char: 'B', word: 'Bus', emoji: '🚌', category: 'Transport' },

  // C
  { char: 'C', word: 'Cat', emoji: '🐈', category: 'Animal' },
  { char: 'C', word: 'Car', emoji: '🚗', category: 'Transport' },
  { char: 'C', word: 'Cake', emoji: '🎂', category: 'Food' },
  { char: 'C', word: 'Cow', emoji: '🐄', category: 'Animal' },
  { char: 'C', word: 'Camera', emoji: '📷', category: 'Object' },

  // D
  { char: 'D', word: 'Dog', emoji: '🐕', category: 'Animal' },
  { char: 'D', word: 'Duck', emoji: '🦆', category: 'Animal' },
  { char: 'D', word: 'Dolphin', emoji: '🐬', category: 'Animal' },
  { char: 'D', word: 'Donut', emoji: '🍩', category: 'Food' },
  { char: 'D', word: 'Drum', emoji: '🥁', category: 'Instrument' },

  // E
  { char: 'E', word: 'Elephant', emoji: '🐘', category: 'Animal' },
  { char: 'E', word: 'Egg', emoji: '🥚', category: 'Food' },
  { char: 'E', word: 'Eagle', emoji: '🦅', category: 'Animal' },
  { char: 'E', word: 'Ear', emoji: '👂', category: 'Body Part' },
  { char: 'E', word: 'Earth', emoji: '🌍', category: 'Nature' },

  // F
  { char: 'F', word: 'Fish', emoji: '🐟', category: 'Animal' },
  { char: 'F', word: 'Frog', emoji: '🐸', category: 'Animal' },
  { char: 'F', word: 'Flower', emoji: '🌸', category: 'Nature' },
  { char: 'F', word: 'Fox', emoji: '🦊', category: 'Animal' },
  { char: 'F', word: 'Fire', emoji: '🔥', category: 'Nature' },

  // G
  { char: 'G', word: 'Giraffe', emoji: '🦒', category: 'Animal' },
  { char: 'G', word: 'Goat', emoji: '🐐', category: 'Animal' },
  { char: 'G', word: 'Grapes', emoji: '🍇', category: 'Food' },
  { char: 'G', word: 'Guitar', emoji: '🎸', category: 'Instrument' },
  { char: 'G', word: 'Gift', emoji: '🎁', category: 'Object' },

  // H
  { char: 'H', word: 'Horse', emoji: '🐎', category: 'Animal' },
  { char: 'H', word: 'House', emoji: '🏠', category: 'Place' },
  { char: 'H', word: 'Hat', emoji: '👒', category: 'Clothing' },
  { char: 'H', word: 'Heart', emoji: '❤️', category: 'Shape' },
  { char: 'H', word: 'Hamburger', emoji: '🍔', category: 'Food' },

  // I
  { char: 'I', word: 'Ice Cream', emoji: '🍦', category: 'Food' },
  { char: 'I', word: 'Igloo', emoji: '⛺', category: 'Place' },
  { char: 'I', word: 'Ice', emoji: '🧊', category: 'Nature' },
  { char: 'I', word: 'Island', emoji: '🏝️', category: 'Place' },
  { char: 'I', word: 'Insect', emoji: '🐞', category: 'Animal' },

  // J
  { char: 'J', word: 'Jellyfish', emoji: '🪼', category: 'Animal' },
  { char: 'J', word: 'Juice', emoji: '🧃', category: 'Food' },
  { char: 'J', word: 'Jeans', emoji: '👖', category: 'Clothing' },
  { char: 'J', word: 'Jet', emoji: '✈️', category: 'Transport' },
  { char: 'J', word: 'Juar', emoji: '🏺', category: 'Object' },

  // K
  { char: 'K', word: 'Kangaroo', emoji: '🦘', category: 'Animal' },
  { char: 'K', word: 'Key', emoji: '🔑', category: 'Object' },
  { char: 'K', word: 'Kite', emoji: '🪁', category: 'Toy' },
  { char: 'K', word: 'King', emoji: '👑', category: 'Person' },
  { char: 'K', word: 'Kiwi', emoji: '🥝', category: 'Food' },

  // L
  { char: 'L', word: 'Lion', emoji: '🦁', category: 'Animal' },
  { char: 'L', word: 'Lemon', emoji: '🍋', category: 'Food' },
  { char: 'L', word: 'Ladybug', emoji: '🐞', category: 'Animal' },
  { char: 'L', word: 'Leaf', emoji: '🍃', category: 'Nature' },
  { char: 'L', word: 'Lollipop', emoji: '🍭', category: 'Food' },

  // M
  { char: 'M', word: 'Monkey', emoji: '🐒', category: 'Animal' },
  { char: 'M', word: 'Mouse', emoji: '🐁', category: 'Animal' },
  { char: 'M', word: 'Moon', emoji: '🌙', category: 'Nature' },
  { char: 'M', word: 'Milk', emoji: '🥛', category: 'Food' },
  { char: 'M', word: 'Motorcycle', emoji: '🏍️', category: 'Transport' },

  // N
  { char: 'N', word: 'Nest', emoji: '🪹', category: 'Nature' },
  { char: 'N', word: 'Nose', emoji: '👃', category: 'Body Part' },
  { char: 'N', word: 'Night', emoji: '🌃', category: 'Nature' },
  { char: 'N', word: 'Nine', emoji: '9️⃣', category: 'Number' },
  { char: 'N', word: 'Nurse', emoji: '👩‍⚕️', category: 'Person' },

  // O
  { char: 'O', word: 'Owl', emoji: '🦉', category: 'Animal' },
  { char: 'O', word: 'Octopus', emoji: '🐙', category: 'Animal' },
  { char: 'O', word: 'Orange', emoji: '🍊', category: 'Food' },
  { char: 'O', word: 'Onion', emoji: '🧅', category: 'Food' },
  { char: 'O', word: 'Ocean', emoji: '🌊', category: 'Nature' },

  // P
  { char: 'P', word: 'Pig', emoji: '🐖', category: 'Animal' },
  { char: 'P', word: 'Pizza', emoji: '🍕', category: 'Food' },
  { char: 'P', word: 'Pencil', emoji: '✏️', category: 'Object' },
  { char: 'P', word: 'Pumpkin', emoji: '🎃', category: 'Food' },
  { char: 'P', word: 'Panda', emoji: '🐼', category: 'Animal' },

  // Q
  { char: 'Q', word: 'Queen', emoji: '👸', category: 'Person' },
  { char: 'Q', word: 'Question', emoji: '❓', category: 'Symbol' },
  { char: 'Q', word: 'Quiet', emoji: '🤫', category: 'Action' },
  { char: 'Q', word: 'Quilt', emoji: '🛌', category: 'Object' },
  { char: 'Q', word: 'Quarter', emoji: '🪙', category: 'Money' },

  // R
  { char: 'R', word: 'Rabbit', emoji: '🐇', category: 'Animal' },
  { char: 'R', word: 'Robot', emoji: '🤖', category: 'Toy' },
  { char: 'R', word: 'Rainbow', emoji: '🌈', category: 'Nature' },
  { char: 'R', word: 'Rocket', emoji: '🚀', category: 'Transport' },
  { char: 'R', word: 'Rose', emoji: '🌹', category: 'Nature' },

  // S
  { char: 'S', word: 'Sun', emoji: '☀️', category: 'Nature' },
  { char: 'S', word: 'Snake', emoji: '🐍', category: 'Animal' },
  { char: 'S', word: 'Spider', emoji: '🕷️', category: 'Animal' },
  { char: 'S', word: 'Star', emoji: '⭐', category: 'Nature' },
  { char: 'S', word: 'Strawberry', emoji: '🍓', category: 'Food' },

  // T
  { char: 'T', word: 'Turtle', emoji: '🐢', category: 'Animal' },
  { char: 'T', word: 'Tiger', emoji: '🐅', category: 'Animal' },
  { char: 'T', word: 'Tree', emoji: '🌳', category: 'Nature' },
  { char: 'T', word: 'Train', emoji: '🚂', category: 'Transport' },
  { char: 'T', word: 'Tomato', emoji: '🍅', category: 'Food' },

  // U
  { char: 'U', word: 'Umbrella', emoji: '☂️', category: 'Object' },
  { char: 'U', word: 'Unicorn', emoji: '🦄', category: 'Animal' },
  { char: 'U', word: 'Up', emoji: '⬆️', category: 'Direction' },
  { char: 'U', word: 'Under', emoji: '⬇️', category: 'Direction' },
  { char: 'U', word: 'Uniform', emoji: '🥋', category: 'Clothing' },

  // V
  { char: 'V', word: 'Van', emoji: '🚐', category: 'Transport' },
  { char: 'V', word: 'Violin', emoji: '🎻', category: 'Instrument' },
  { char: 'V', word: 'Volcano', emoji: '🌋', category: 'Nature' },
  { char: 'V', word: 'Vegetables', emoji: '🥦', category: 'Food' },
  { char: 'V', word: 'Vase', emoji: '🏺', category: 'Object' },

  // W
  { char: 'W', word: 'Whale', emoji: '🐋', category: 'Animal' },
  { char: 'W', word: 'Watermelon', emoji: '🍉', category: 'Food' },
  { char: 'W', word: 'Watch', emoji: '⌚', category: 'Object' },
  { char: 'W', word: 'Window', emoji: '🪟', category: 'Object' },
  { char: 'W', word: 'Wolf', emoji: '🐺', category: 'Animal' },

  // X
  { char: 'X', word: 'X-ray', emoji: '🩻', category: 'Object' },
  { char: 'X', word: 'Xylophone', emoji: '🎹', category: 'Instrument' },
  { char: 'X', word: 'Box', emoji: '📦', category: 'Object' },
  { char: 'X', word: 'Six', emoji: '6️⃣', category: 'Number' },
  { char: 'X', word: 'Fox', emoji: '🦊', category: 'Animal' },

  // Y
  { char: 'Y', word: 'Yoyo', emoji: '🪀', category: 'Toy' },
  { char: 'Y', word: 'Yellow', emoji: '💛', category: 'Color' },
  { char: 'Y', word: 'Yogurt', emoji: '🥣', category: 'Food' },
  { char: 'Y', word: 'Yak', emoji: '🐃', category: 'Animal' },
  { char: 'Y', word: 'Yarn', emoji: '🧶', category: 'Object' },

  // Z
  { char: 'Z', word: 'Zebra', emoji: '🦓', category: 'Animal' },
  { char: 'Z', word: 'Zoo', emoji: '🦁', category: 'Place' },
  { char: 'Z', word: 'Zipper', emoji: '🤐', category: 'Object' },
  { char: 'Z', word: 'Zero', emoji: '0️⃣', category: 'Number' },
  { char: 'Z', word: 'Zigzag', emoji: '〰️', category: 'Shape' },
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
