import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ShadowMatch from './ShadowMatch';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

// Mock data
vi.mock('../../../data/englishData', () => ({
  ENGLISH_LETTERS: [
    { word: 'cat', emoji: '🐱', category: 'Animal' },
    { word: 'dog', emoji: '🐶', category: 'Animal' },
    { word: 'fish', emoji: '🐟', category: 'Animal' },
  ]
}));

describe('ShadowMatch Game', () => {
  const renderGame = () => {
    return render(
      <ThemeProvider theme={theme}>
        <ShadowMatch />
      </ThemeProvider>
    );
  };

  it('renders title', () => {
    renderGame();
    expect(screen.getByText('logic.games.shadowMatch.title')).toBeInTheDocument();
  });

  it('renders target item and options', () => {
    renderGame();
    // Target item is in MainItemContainer (font-size 8rem)
    // Options are in ShadowCard
    
    // We should see emojis.
    // Since we mocked 3 items, and logic picks 1 target + 2 distractors, 
    // we should see all 3 emojis interacting (one as target, three as options)
    // Target + Option means we might see the emoji twice
    expect(screen.getAllByText('🐱').length).toBeGreaterThan(0);
    expect(screen.getAllByText('🐶').length).toBeGreaterThan(0);
    expect(screen.getAllByText('🐟').length).toBeGreaterThan(0);
  });

  it('handles option click', () => {
    renderGame();
    // We don't know which is the target easily without inspecting state or DOM classes.
    // But we can click an option and checks if something happens.
    // If we click the correct one, we get confetti (mocked).
    // If wrong, it shakes (visual).
    
    // Let's just verify we can click buttons.
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(3);
    
    fireEvent.click(buttons[0]);
    // Assert visual feedback or state change if possible? 
    // Since status changes, maybe we can check for border color changes via style matching?
    // or just ensure no crash.
  });
});
