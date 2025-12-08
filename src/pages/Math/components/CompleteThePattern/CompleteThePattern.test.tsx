import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CompleteThePattern from './CompleteThePattern';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

describe('CompleteThePattern', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <CompleteThePattern />
      </ThemeProvider>
    );
  };

  it('renders question', () => {
    renderGame();
    expect(screen.getByText('math.games.patternQuestion')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    renderGame();
    expect(screen.getByText('?')).toBeInTheDocument();
  });
});
