import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FirstLetterQuiz from './FirstLetterQuiz';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

vi.mock('../../../../data/englishData', () => ({
  ENGLISH_LETTERS: [
    { char: 'A', word: 'Apple', emoji: '🍎' },
    { char: 'B', word: 'Bear', emoji: '🐻' },
    { char: 'C', word: 'Cat', emoji: '🐱' },
  ]
}));

describe('FirstLetterQuiz', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <FirstLetterQuiz />
      </ThemeProvider>
    );
  };

  it('renders question text', () => {
    renderGame();
    expect(screen.getByText('english.games.quiz.question')).toBeInTheDocument();
  });

  it('renders emoji and options', () => {
    renderGame();
    // One of the emojis should be present
    expect(screen.getByText(/🍎|🐻|🐱/)).toBeInTheDocument();
    
    // Check options
    const options = screen.getAllByRole('button');
    // 1 speaker + options(3 usually 1 target + 2 distractors, logic ensures 3 total)
    expect(options.length).toBeGreaterThanOrEqual(3);
  });
});
