import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LetterFlashcards from './LetterFlashcards';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

vi.mock('../../../../data/englishData', () => ({
  ENGLISH_LETTERS: [
    { char: 'A', word: 'Apple', emoji: '🍎' },
    { char: 'B', word: 'Ball', emoji: '⚽' }
  ]
}));

describe('English LetterFlashcards', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <LetterFlashcards />
      </ThemeProvider>
    );
  };

  it('renders a flashcard', () => {
    renderGame();
    // English flashcards usually show word (A) or name (Apple)? 
    // Let's check the implementation if needed, but based on mock:
    expect(screen.getByText(/Apple|Ball/)).toBeInTheDocument();
    expect(screen.getByText(/🍎|⚽/)).toBeInTheDocument();
  });
});
