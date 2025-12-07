import { Routes, Route, useLocation } from 'react-router-dom';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';
import DifficultySelection from './components/DifficultySelection/DifficultySelection';
import OperationSelection from './components/OperationSelection/OperationSelection';
import MathGame from './components/MathGame/MathGame';

export default function Math() {
  const { t } = useTranslation();
  const location = useLocation();
  const isGameRoute = location.pathname.split('/').length > 2;

  return (
    <FeaturePageLayout 
      title={t('pages.math.title')} 
      emoji="🔢" 
      color={theme.colors.primary}
      hideHeader={isGameRoute}
    >
      <Routes>
        <Route index element={<MathGameSelection />} />
        
        {/* Arithmetic (Old Flow) */}
        <Route path="arithmetic" element={<DifficultySelection />} />
        <Route path="arithmetic/:difficulty" element={<OperationSelection />} />
        <Route path="arithmetic/:difficulty/:operation" element={<MathGame />} />

        {/* New Games */}
        <Route path="count-critters" element={<CountTheCritters />} />
        <Route path="bigger-smaller" element={<BiggerOrSmaller />} />
        <Route path="patterns" element={<CompleteThePattern />} />
      </Routes>
    </FeaturePageLayout>
  );
}
import MathGameSelection from './components/GameSelection/MathGameSelection';
import CountTheCritters from './components/CountTheCritters/CountTheCritters';
import BiggerOrSmaller from './components/BiggerOrSmaller/BiggerOrSmaller';
import CompleteThePattern from './components/CompleteThePattern/CompleteThePattern';
