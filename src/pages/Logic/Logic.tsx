import { Routes, Route } from 'react-router-dom';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';

import SimonSays from '../../components/Games/SimonSays/SimonSays';
import ShadowMatch from '../../components/Games/ShadowMatch/ShadowMatch';
import GameSelection from '../../components/GameSelection/GameSelection';

export default function Logic() {
  const { t } = useTranslation();

  const games = [
    {
      id: 'simon-says',
      title: t('logic.games.simonSays.title'),
      description: t('logic.games.simonSays.desc'),
      icon: '🔔',
      path: 'simon-says',
      color: '#FFD700'
    },
    {
      id: 'shadow-match',
      title: t('logic.games.shadowMatch.title'),
      description: t('logic.games.shadowMatch.desc'),
      icon: '👥',
      path: 'shadow-match',
      color: '#A9A9A9'
    }
  ];

  return (
    <FeaturePageLayout
      title={t('pages.logic.title')}
      emoji="🧩"
      color={theme.colors.accent}
    >
      <Routes>
        <Route index element={<GameSelection title={t('logic.selectGame')} games={games} />} />
        <Route path="simon-says" element={<SimonSays />} />
        <Route path="shadow-match" element={<ShadowMatch />} />
      </Routes>
    </FeaturePageLayout>
  );
}
