import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';

import SimonSays from '../../components/Games/SimonSays/SimonSays';
import ShadowMatch from '../../components/Games/ShadowMatch/ShadowMatch';
import GameSelection from './components/GameSelection/GameSelection';

export default function Logic() {
  const { t } = useTranslation();
  const location = useLocation();
  const isGameRoute = location.pathname.split('/').length > 2;

  return (
    <FeaturePageLayout
      title={t('pages.logic.title')}
      emoji="🧩"
      color={theme.colors.accent}
      hideHeader={isGameRoute}
    >
      <Routes>
        <Route index element={<GameSelection />} />
        <Route path="simon-says" element={<SimonSays />} />
        <Route path="shadow-match" element={<ShadowMatch />} />
      </Routes>
    </FeaturePageLayout>
  );
}
