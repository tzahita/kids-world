import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SimonSays from './SimonSays';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

describe('SimonSays Game', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <SimonSays />
      </ThemeProvider>
    );
  };

  it('renders correctly with title and start button', () => {
    renderGame();
    expect(screen.getByText('logic.games.simonSays.title')).toBeInTheDocument();
    expect(screen.getByText('game.start')).toBeInTheDocument();
  });

  it('starts game when start button is clicked', async () => {
    renderGame();
    const startBtn = screen.getByText('game.start');
    fireEvent.click(startBtn);
    
    // Expect score to be visible (or 0)
    expect(screen.getByText('game.score: 0')).toBeInTheDocument();
  });
});
