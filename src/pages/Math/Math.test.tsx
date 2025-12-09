import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MathPage from './Math';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

// Mock GameSelection to avoid deep rendering issues and focus on Page shell


describe('Math Page', () => {
  const renderPage = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <MathPage />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders page title', () => {
    renderPage();
    expect(screen.getByText('pages.math.title')).toBeInTheDocument();
  });

  it('renders game selection by default', () => {
    renderPage();
    // Verify at least one game card is present
    expect(screen.getByTestId('game-card-arithmetic')).toBeInTheDocument();
  });
});
