import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GameSelection from './GameSelection';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('Shared GameSelection', () => {
  const games = [
    {
      id: 'test-game',
      path: '/test',
      title: 'Test Game',
      description: 'Description',
      icon: '🧪'
    }
  ];

  it('renders title and games', () => {
    render(
      <ThemeProvider theme={theme}>
        <GameSelection title="Choose" games={games} />
      </ThemeProvider>
    );

    expect(screen.getByText('Choose')).toBeInTheDocument();
    expect(screen.getByText('Test Game')).toBeInTheDocument();
  });

  it('navigates on click', () => {
    render(
      <ThemeProvider theme={theme}>
        <GameSelection games={games} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByTestId('game-card-test-game'));
    expect(mockNavigate).toHaveBeenCalledWith('/test');
  });
});
