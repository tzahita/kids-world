import { Routes, Route } from 'react-router-dom';
import MemoryDifficultySelection from '../../../../components/MemoryGame/MemoryDifficultySelection';
import MemoryBoard from '../../../../components/MemoryGame/MemoryBoard';
import { HEBREW_LETTERS } from '../../../../data/hebrewData';

export default function HebrewMemory() {  
  const uniqueLetters = Array.from(new Set(HEBREW_LETTERS.map(l => l.char)));

  return (
      <Routes>
        <Route index element={<MemoryDifficultySelection />} />
        <Route path=":difficulty" element={<MemoryBoard items={uniqueLetters} />} />
      </Routes>
  );
}
