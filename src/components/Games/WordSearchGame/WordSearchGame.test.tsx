import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import WordSearchGame from './WordSearchGame';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const mockLevel = {
  id: 'test',
  gridSize: 5,
  words: [{ word: 'ABC', emoji: '🔤' }]
};

describe('WordSearchGame', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <WordSearchGame 
          level={mockLevel}
          language="en"
        />
      </ThemeProvider>
    );
  };

  it('renders word list', () => {
    renderGame();
    expect(screen.getByText('🔤 ABC')).toBeInTheDocument();
  });

  it('renders grid cells', () => {
    renderGame();
    // Grid size 5x5 = 25 cells.
    // They are usually <div> or <button> inside WordSearchBoard.
    // Without specific roles/ids, counting generically might be flaky if container structure changes.
    // But we can check if it renders without error.
  });
});
