import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HebrewPage from './Hebrew';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

vi.mock('./components/GameSelection/GameSelection', () => ({
  default: () => <div data-testid="hebrew-game-selection">Game Selection</div>
}));

describe('Hebrew Page', () => {
  const renderPage = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <HebrewPage />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders page title', () => {
    renderPage();
    expect(screen.getByText('pages.hebrew.title')).toBeInTheDocument();
  });

  it('renders game selection by default', () => {
    renderPage();
    expect(screen.getByTestId('hebrew-game-selection')).toBeInTheDocument();
  });
});
