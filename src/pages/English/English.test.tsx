import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import EnglishPage from './English';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';



describe('English Page', () => {
  const renderPage = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <EnglishPage />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders page title', () => {
    renderPage();
    expect(screen.getByText('pages.english.title')).toBeInTheDocument();
  });

  it('renders game selection by default', () => {
    renderPage();
    // Verify at least one game card is present
    expect(screen.getByTestId('game-card-flashcards')).toBeInTheDocument();
  });
});
