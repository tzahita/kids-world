import { Routes, Route } from 'react-router-dom';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';
import DifficultySelection from './components/DifficultySelection/DifficultySelection';
import OperationSelection from './components/OperationSelection/OperationSelection';
import MathGame from './components/MathGame/MathGame';

export default function Math() {
  const { t } = useTranslation();
  return (
    <FeaturePageLayout title={t('pages.math.title')} emoji="🔢" color={theme.colors.primary}>
      <Routes>
        <Route index element={<DifficultySelection />} />
        <Route path=":difficulty" element={<OperationSelection />} />
        <Route path=":difficulty/:operation" element={<MathGame />} />
      </Routes>
    </FeaturePageLayout>
  );
}
