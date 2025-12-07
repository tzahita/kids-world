import { Routes, Route, useLocation } from 'react-router-dom';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';
import MemoryDifficultySelection from '../../components/Games/MemoryGame/MemoryDifficultySelection';
import MemoryBoard from '../../components/Games/MemoryGame/MemoryBoard';
import { MEMORY_ICONS } from '../../data/memoryData';

export default function MemoryGame() {
  const { t } = useTranslation();
  const location = useLocation();
  const isPlaying = location.pathname.split('/').length > 2; // e.g., /memory/hard

  return (
    <FeaturePageLayout
      title={t('pages.memory.title')}
      emoji="🧠"
      color={theme.colors.success}
      hideHeader={isPlaying}
    >
      <Routes>
        <Route index element={<MemoryDifficultySelection />} />
        <Route path=":difficulty" element={<MemoryBoard items={MEMORY_ICONS} />} />
      </Routes>
    </FeaturePageLayout>
  );
}
