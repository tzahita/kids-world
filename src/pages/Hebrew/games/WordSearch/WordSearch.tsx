import { useState, useLayoutEffect } from 'react';
import { HEBREW_WORD_SEARCH } from '../../../../data/hebrewData';
import WordSearchGame from '../../../../components/WordSearchGame/WordSearchGame';

export default function WordSearch() {
  const [level, setLevel] = useState(HEBREW_WORD_SEARCH[0]);

  // Function to pick a random level
  const pickRandomLevel = () => {
    const randomIndex = Math.floor(Math.random() * HEBREW_WORD_SEARCH.length);
    setLevel(HEBREW_WORD_SEARCH[randomIndex]);
  };

  // Pick random level on mount
  useLayoutEffect(() => {
    pickRandomLevel();
  }, []);

  return (
    <WordSearchGame 
      level={level} 
      language="he" 
      onRestart={pickRandomLevel} 
    />
  );
}
