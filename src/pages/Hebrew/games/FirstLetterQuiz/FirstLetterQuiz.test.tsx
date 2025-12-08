import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FirstLetterQuiz from './FirstLetterQuiz';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

// Mock data
vi.mock('../../../../data/hebrewData', () => ({
  HEBREW_LETTERS: [
    { char: 'א', word: 'אריה', emoji: '🦁' },
    { char: 'ב', word: 'בית', emoji: '🏠' },
    { char: 'ג', word: 'גמל', emoji: '🐫' },
  ]
}));

describe('FirstLetterQuiz', () => {
  const renderQuiz = () => {
    return render(
      <ThemeProvider theme={theme}>
        <FirstLetterQuiz />
      </ThemeProvider>
    );
  };

  it('renders question', () => {
    renderQuiz();
    expect(screen.getByText('hebrew.games.quiz.question')).toBeInTheDocument();
    // Should see an emoji
    expect(screen.getByText(/🦁|🏠|🐫/)).toBeInTheDocument();
  });

  it('renders options', () => {
    renderQuiz();
    const options = screen.getAllByRole('button', { name: /[אבג]/ });
    expect(options).toHaveLength(3);
  });
});
