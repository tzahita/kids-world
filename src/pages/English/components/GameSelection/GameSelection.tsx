import { useTranslation } from 'react-i18next';
import {
  MenuGrid,
  GameCard,
  Icon,
  GameTitle,
  GameDescription,
} from './GameSelectionStyled';

export default function GameSelection() {
  const { t } = useTranslation();

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
      description: t('memory.desc'), // Assuming a description is needed based on existing structure
      icon: '🧠',
    },
  ];

  return (
    <MenuGrid>
      {games.map((game) => (
        <GameCard key={game.id} to={game.path}>
          <Icon>{game.icon}</Icon>
          <GameTitle>{game.title}</GameTitle>
          <GameDescription>{game.description}</GameDescription>
        </GameCard>
      ))}
    </MenuGrid>
  );
}
