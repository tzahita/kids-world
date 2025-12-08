import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SpellingGame from './SpellingGame';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const mockWords = [
  { word: 'BEE', emoji: '🐝' }
];

describe('SpellingGame', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <SpellingGame 
          words={mockWords}
          titleKey="test.title"
        />
      </ThemeProvider>
    );
  };

  it('renders emoji and slots', () => {
    renderGame();
    expect(screen.getByText('test.title')).toBeInTheDocument();
    expect(screen.getByText('🐝')).toBeInTheDocument();
    // 'BEE' has 3 letters.
    // Logic: length <= 5 -> 1 hint if length > 2 (BEE length=3 => 1 hint)
    // So 1 slot filled, 2 empty (but rendered).
    // The letters bank should contain the other 2 letters.
    
    // We can just check existence of letters generally
    expect(screen.getAllByText('B').length).toBeGreaterThan(0);
    expect(screen.getAllByText('E').length).toBeGreaterThan(0);
  });
});
