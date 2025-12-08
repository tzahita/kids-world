import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MathGameSelection from './MathGameSelection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

describe('MathGameSelection', () => {
  const renderSel = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <MathGameSelection />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders game links', () => {
    renderSel();
    expect(screen.getByText('math.games.arithmetic')).toBeInTheDocument();
    expect(screen.getByText('math.games.countCritters')).toBeInTheDocument();
    expect(screen.getByText('math.games.biggerSmaller')).toBeInTheDocument();
    expect(screen.getByText('math.games.patterns')).toBeInTheDocument();
  });
});
