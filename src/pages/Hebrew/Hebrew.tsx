import { Routes, Route, useLocation } from 'react-router-dom';
import FeaturePageLayout from '../../components/FeaturePageLayout/FeaturePageLayout';
import { theme } from '../../styles/theme';
import { useTranslation } from 'react-i18next';
import GameSelection from '../../components/GameSelection/GameSelection';
import LetterFlashcards from './games/LetterFlashcards/LetterFlashcards';
import FirstLetterQuiz from './games/FirstLetterQuiz/FirstLetterQuiz';
import WordSearch from './games/WordSearch/WordSearch';
import SpellingGame from '../../components/Games/SpellingGame/SpellingGame';
import { HEBREW_LETTERS } from '../../data/hebrewData';
import SoundMatchGame from '../../components/Games/SoundMatchGame/SoundMatchGame';
import HangmanGame from '../../components/Games/HangmanGame/HangmanGame';

import HebrewMemory from './games/Memory/HebrewMemory';

export default function Hebrew() {
  const { t } = useTranslation();
  const location = useLocation();
  const isGameRoute = location.pathname.split('/').length > 2;

  const games = [
    {
      id: 'flashcards',
      path: '/hebrew/flashcards',
      title: t('hebrew.games.flashcards.title'),
      description: t('hebrew.games.flashcards.desc'),
      icon: '📇',
    },
    {
      id: 'quiz',
      path: '/hebrew/quiz',
      title: t('hebrew.games.quiz.title'),
      description: t('hebrew.games.quiz.desc'),
      icon: '❓',
    },
    {
      id: 'wordsearch',
      path: '/hebrew/wordsearch',
      title: t('wordsearch.title'),
      description: t('wordsearch.desc'),
      icon: '🧩',
    },
    {
      id: 'spelling',
      path: '/hebrew/spelling',
      title: t('hebrew.games.spelling.title'),
      description: t('hebrew.games.spelling.desc'),
      icon: '📝',
    },
    {
      id: 'sound-match',
      path: '/hebrew/sound-match',
      title: t('hebrew.games.soundMatch.title'),
      description: t('hebrew.games.soundMatch.desc'),
      icon: '🔊',
    },
    {
      id: 'hangman',
      path: '/hebrew/hangman',
      title: t('hebrew.games.hangman.title'),
      description: t('hebrew.games.hangman.desc'),
      icon: '🌻',
    },
    {
      id: 'memory',
      path: '/hebrew/memory',
      title: t('memory.titleLetter'),
      description: t('memory.desc'),
      icon: '🧠',
    },
  ];

  return (
    <FeaturePageLayout 
      title={t('pages.hebrew.title')} 
      emoji="א" 
      color={theme.colors.secondary}
      hideHeader={isGameRoute}
    >
      <Routes>
        <Route index element={<GameSelection games={games} />} />
        <Route path="flashcards" element={<LetterFlashcards />} />
        <Route path="quiz" element={<FirstLetterQuiz />} />
        <Route path="wordsearch" element={<WordSearch levelId="animals-easy" />} />
        <Route 
          path="spelling" 
          element={
            <SpellingGame 
              words={HEBREW_LETTERS.filter(l => l.word.length <= 5).map(l => ({
                // Remove Nekudot from the word for the game logic
                word: l.word.replace(/[\u0591-\u05C7]/g, ''), 
                emoji: l.emoji,
                category: l.category
              }))} 
              titleKey="hebrew.games.spelling.title" 
              direction="rtl"
            />
          } 
        />
        <Route 
          path="sound-match" 
          element={
            <SoundMatchGame 
              words={HEBREW_LETTERS.filter(l => l.word.length >= 2)} 
              titleKey="hebrew.games.soundMatch.title" 
              lang="he"
            />
          } 
        />
        <Route 
          path="hangman" 
          element={
            <HangmanGame 
              words={HEBREW_LETTERS.filter(l => l.word.length <= 6).map(l => ({
                word: l.word.replace(/[\u0591-\u05C7]/g, ''),
                emoji: l.emoji,
                category: l.category 
              }))} 
              alphabet={"אבגדהוזחטיכלמנסעפצקרשת".split('')}
              titleKey="hebrew.games.hangman.title" 
              direction="rtl"
            />
          } 
        />
        <Route path="memory/*" element={<HebrewMemory />} />
      </Routes>
    </FeaturePageLayout>
  );
}
