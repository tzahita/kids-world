
import { Routes, Route, useLocation } from 'react-router-dom';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';
import GameSelection from './components/GameSelection/GameSelection';
import LetterFlashcards from './games/LetterFlashcards/LetterFlashcards';
import FirstLetterQuiz from './games/FirstLetterQuiz/FirstLetterQuiz';
import WordSearch from './games/WordSearch/WordSearch';

import EnglishMemory from './games/Memory/EnglishMemory';

export default function English() {
  const { t } = useTranslation();
  const location = useLocation();
  const isGameRoute = location.pathname.split('/').length > 2;

  return (
    <FeaturePageLayout 
      title={t('pages.english.title')} 
      emoji="A" 
      color={theme.colors.accent}
      hideHeader={isGameRoute}
    >
      <Routes>
        <Route index element={<GameSelection />} />
        <Route path="flashcards" element={<LetterFlashcards />} />
        <Route path="quiz" element={<FirstLetterQuiz />} />
        <Route path="wordsearch" element={<WordSearch />} />
        <Route path="memory/*" element={<EnglishMemory />} />
      </Routes>
    </FeaturePageLayout>
  );
}
