import { useState, useLayoutEffect } from 'react';
import { ENGLISH_WORD_SEARCH } from '../../../../data/englishData';
import WordSearchGame from '../../../../components/WordSearchGame/WordSearchGame';

export default function WordSearch() {
  const [level, setLevel] = useState(ENGLISH_WORD_SEARCH[0]);

  // Function to pick a random level
  const pickRandomLevel = () => {
    const randomIndex = Math.floor(Math.random() * ENGLISH_WORD_SEARCH.length);
    setLevel(ENGLISH_WORD_SEARCH[randomIndex]);
  };

  // Pick random level on mount
  useLayoutEffect(() => {
    pickRandomLevel();
  }, []);

  return (
    <WordSearchGame 
      level={level} 
      language="en" 
      onRestart={pickRandomLevel} 
    />
  );
}
