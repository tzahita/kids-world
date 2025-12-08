import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GameSelection from './GameSelection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import { MemoryRouter } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('Logic GameSelection', () => {
  const renderSelection = () => {
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <GameSelection />
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  it('renders game options', () => {
    renderSelection();
    expect(screen.getByText('logic.selectGame')).toBeInTheDocument();
    expect(screen.getByText('logic.games.simonSays.title')).toBeInTheDocument();
    expect(screen.getByText('logic.games.shadowMatch.title')).toBeInTheDocument();
  });

  it('navigates on click', () => {
    renderSelection();
    const simonCard = screen.getByText('logic.games.simonSays.title');
    fireEvent.click(simonCard);
    expect(mockNavigate).toHaveBeenCalledWith('simon-says');
  });
});
