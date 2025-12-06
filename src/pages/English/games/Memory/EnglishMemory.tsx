import { Routes, Route } from 'react-router-dom';
import MemoryDifficultySelection from '../../../../components/MemoryGame/MemoryDifficultySelection';
import MemoryBoard from '../../../../components/MemoryGame/MemoryBoard';
import { ENGLISH_LETTERS } from '../../../../data/englishData';

export default function EnglishMemory() {
  const letters = Array.from(new Set(ENGLISH_LETTERS.map(l => l.char)));

  return (
      <Routes>
        <Route index element={<MemoryDifficultySelection />} />
        <Route path=":difficulty" element={<MemoryBoard items={letters} />} />
      </Routes>
  );
}
