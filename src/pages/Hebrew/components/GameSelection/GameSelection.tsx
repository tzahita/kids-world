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
      id: 'memory',
      path: '/hebrew/memory',
      title: t('memory.titleLetter'),
      description: t('memory.desc'), // Assuming a description key 'memory.desc' exists
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
