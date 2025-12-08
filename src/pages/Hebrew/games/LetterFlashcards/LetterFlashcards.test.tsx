import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LetterFlashcards from './LetterFlashcards';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

vi.mock('../../../../data/hebrewData', () => ({
  HEBREW_LETTERS: [
    { char: 'א', word: 'TestAlef', emoji: '🅰️' },
    { char: 'ב', word: 'TestBet', emoji: '🅱️' }
  ]
}));

describe('Hebrew LetterFlashcards', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <LetterFlashcards />
      </ThemeProvider>
    );
  };

  it('renders a flashcard', () => {
    renderGame();
    // Since it picks random, we should see one of the mocked items.
    // We can regex match any of them.
    expect(screen.getByText(/TestAlef|TestBet/)).toBeInTheDocument();
    expect(screen.getByText(/🅰️|🅱️/)).toBeInTheDocument();
  });

  it('randomizes on button click', async () => {
    renderGame();
    const randomizeBtn = screen.getByText('hebrew.games.flashcards.randomize');
    
    // Click it a few times to ensure state changes (statistically it will change or re-pick)
    // We just want to ensure no crash and button works.
    fireEvent.click(randomizeBtn);
    expect(screen.getByText(/TestAlef|TestBet/)).toBeInTheDocument();
  });
});
