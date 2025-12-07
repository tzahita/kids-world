import { useState, useLayoutEffect } from 'react';
import { ENGLISH_WORD_SEARCH } from '../../../../data/englishData';
import WordSearchGame from '../../../../components/WordSearchGame/WordSearchGame';

interface WordSearchProps {
  levelId?: string;
}

export default function WordSearch({ levelId }: WordSearchProps) {
  const [level, setLevel] = useState(
    levelId 
      ? ENGLISH_WORD_SEARCH.find(l => l.id === levelId) || ENGLISH_WORD_SEARCH[0]
      : ENGLISH_WORD_SEARCH[0]
  );

  // Function to pick a random level
  const pickRandomLevel = () => {
    const randomIndex = Math.floor(Math.random() * ENGLISH_WORD_SEARCH.length);
    setLevel(ENGLISH_WORD_SEARCH[randomIndex]);
  };

  // Pick random level on mount ONLY if no levelId provided
  useLayoutEffect(() => {
    if (!levelId) pickRandomLevel();
  }, [levelId]);

  return (
    <WordSearchGame 
      level={level} 
      language="en" 
      onRestart={pickRandomLevel} 
    />
  );
}
