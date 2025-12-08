import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HangmanGame from './HangmanGame';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const mockWords = [
  { word: 'HI', emoji: '👋', category: 'Test' }
];

describe('HangmanGame', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <HangmanGame 
          words={mockWords}
          alphabet={['H', 'I', 'Z']}
          titleKey="test.title"
        />
      </ThemeProvider>
    );
  };

  it('renders title and category', () => {
    renderGame();
    expect(screen.getByText('test.title')).toBeInTheDocument();
    expect(screen.getByText('common.category: Test')).toBeInTheDocument();
  });

  it('reveals letter on correct guess', () => {
    renderGame();
    // 'HI' length 2 => 0 hints.
    // Slots are empty.
    
    // Click 'H' button
    const hBtn = screen.getByRole('button', { name: 'H' });
    fireEvent.click(hBtn);
    
    // Now 'H' should be visible in the word display.
    // We can look for 'H' in the display slots. 
    // Since button also has 'H', we expect 2 'H's now (button + display).
    expect(screen.getAllByText('H').length).toBe(2);
  });

  it('increments mistakes on wrong guess', () => {
    renderGame();
    // 'Z' is not in 'APP'
    const zBtn = screen.getByText('Z');
    fireEvent.click(zBtn);
    
    // Should show a flower part. 
    // Mistakes = 1 -> '🌺'
    // Mistakes = 0 -> '🌻'
    // Wait, initially it is '🌻' (mistakes 0).
    // If we mistake, it becomes '🌺'.
    // NOTE: The implementation renders ONE flower part based on mistakes index.
    // mistakes 0: 🌻
    // mistakes 1: 🌺
    
    expect(screen.getByText('🌺')).toBeInTheDocument();
  });
});
