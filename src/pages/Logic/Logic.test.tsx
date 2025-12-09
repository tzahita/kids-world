import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logic from './Logic';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

describe('Logic Page', () => {
  const renderPage = () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Logic />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders game selection by default', () => {
    renderPage();
    // Verify at least one game card is present
    expect(screen.getByTestId('game-card-simon-says')).toBeInTheDocument();
  });
});
