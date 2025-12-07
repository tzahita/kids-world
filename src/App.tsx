import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import MathGame from './pages/Math/Math';
import Hebrew from './pages/Hebrew/Hebrew';
import English from './pages/English/English';
import MemoryGame from './pages/MemoryGame/MemoryGame';
import Logic from './pages/Logic/Logic';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="math/*" element={<MathGame />} />
        <Route path="hebrew/*" element={<Hebrew />} />
        <Route path="english/*" element={<English />} />
        <Route path="memory/*" element={<MemoryGame />} />
        <Route path="logic/*" element={<Logic />} />
      </Route>
    </Routes>
  );
}

export default App;
