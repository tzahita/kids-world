
import { Routes, Route, useLocation } from 'react-router-dom';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';
import GameSelection from '../../components/Shared/GameSelection/GameSelection';
import LetterFlashcards from './games/LetterFlashcards/LetterFlashcards';
import FirstLetterQuiz from './games/FirstLetterQuiz/FirstLetterQuiz';
import WordSearch from './games/WordSearch/WordSearch';

import EnglishMemory from './games/Memory/EnglishMemory';

export default function English() {
  const { t } = useTranslation();
  const location = useLocation();
  const isGameRoute = location.pathname.split('/').length > 2;

  const games = [
    {
      id: 'flashcards',
      path: '/english/flashcards',
      title: t('english.games.flashcards.title'),
      description: t('english.games.flashcards.desc'),
      icon: '📇',
    },
    {
      id: 'quiz',
      path: '/english/quiz',
      title: t('english.games.quiz.title'),
      description: t('english.games.quiz.desc'),
      icon: '❓',
    },
    {
      id: 'wordsearch',
      path: '/english/wordsearch',
      title: t('wordsearch.title'),
      description: t('wordsearch.desc'),
      icon: '🧩',
    },
    {
      id: 'spelling',
      path: '/english/spelling',
      title: t('english.games.spelling.title'),
      description: t('english.games.spelling.desc'),
      icon: '📝',
    },
    {
      id: 'sound-match',
      path: '/english/sound-match',
      title: t('english.games.soundMatch.title'),
      description: t('english.games.soundMatch.desc'),
      icon: '🔊',
    },
    {
      id: 'hangman',
      path: '/english/hangman',
      title: t('english.games.hangman.title'),
      description: t('english.games.hangman.desc'),
      icon: '🌻',
    },
    {
      id: 'memory',
      path: '/english/memory',
      title: t('memory.titleLetter'),
      description: t('memory.desc'),
      icon: '🧠',
    },
  ];

  return (
    <FeaturePageLayout 
      title={t('pages.english.title')} 
      emoji="A" 
      color={theme.colors.accent}
      hideHeader={isGameRoute}
    >
      <Routes>
        <Route index element={<GameSelection games={games} />} />
        <Route path="flashcards" element={<LetterFlashcards />} />
        <Route path="quiz" element={<FirstLetterQuiz />} />
        <Route path="wordsearch" element={<WordSearch levelId="english-easy" />} />
        <Route 
          path="spelling" 
          element={
            <SpellingGame 
              words={ENGLISH_LETTERS.map(l => ({ word: l.word.toUpperCase(), emoji: l.emoji }))} 
              titleKey="english.games.spelling.title" 
            />
          } 
        />
        <Route 
          path="sound-match" 
          element={
            <SoundMatchGame 
              words={ENGLISH_LETTERS.map(l => ({ word: l.name?.toUpperCase() || l.word.toUpperCase(), emoji: l.emoji }))} 
              titleKey="english.games.soundMatch.title" 
              lang="en"
            />
          } 
        />
        <Route 
          path="hangman" 
          element={
            <HangmanGame 
              words={ENGLISH_LETTERS
                .map(l => ({ word: l.name?.toUpperCase() || l.word.toUpperCase(), emoji: l.emoji, category: l.category }))} 
              alphabet={"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')}
              titleKey="english.games.hangman.title" 
            />
          } 
        />
        <Route path="memory/*" element={<EnglishMemory />} />
      </Routes>
    </FeaturePageLayout>
  );
}
import SpellingGame from '../../components/Games/SpellingGame/SpellingGame';
import { ENGLISH_LETTERS } from '../../data/englishData';
import SoundMatchGame from '../../components/Games/SoundMatchGame/SoundMatchGame';
import HangmanGame from '../../components/Games/HangmanGame/HangmanGame';
