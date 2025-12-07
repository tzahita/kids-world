import { useState, useLayoutEffect } from 'react';
import { HEBREW_WORD_SEARCH } from '../../../../data/hebrewData';
import WordSearchGame from '../../../../components/Games/WordSearchGame/WordSearchGame';

interface WordSearchProps {
  levelId?: string;
}

export default function WordSearch({ levelId }: WordSearchProps) {
  const [level, setLevel] = useState(
    levelId 
      ? HEBREW_WORD_SEARCH.find(l => l.id === levelId) || HEBREW_WORD_SEARCH[0]
      : HEBREW_WORD_SEARCH[0]
  );

  // Function to pick a random level
  const pickRandomLevel = () => {
    const randomIndex = Math.floor(Math.random() * HEBREW_WORD_SEARCH.length);
    setLevel(HEBREW_WORD_SEARCH[randomIndex]);
  };

  // Pick random level on mount ONLY if no levelId provided
  useLayoutEffect(() => {
    if (!levelId) pickRandomLevel();
  }, [levelId]);

  return (
    <WordSearchGame 
      level={level} 
      language="he" 
      onRestart={pickRandomLevel} 
    />
  );
}
