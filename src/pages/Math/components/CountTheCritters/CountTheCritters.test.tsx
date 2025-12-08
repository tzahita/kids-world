import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CountTheCritters from './CountTheCritters';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

describe('CountTheCritters', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <CountTheCritters />
      </ThemeProvider>
    );
  };

  it('renders question', () => {
    renderGame();
    expect(screen.getByText('math.games.countQuestion')).toBeInTheDocument();
  });

  it('renders options', () => {
    renderGame();
    // Should have 3 option buttons (Target + 2 distractors)
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(3);
  });
});
