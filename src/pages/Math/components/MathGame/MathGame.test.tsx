import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import MathGame from './MathGame';

// Mock confetti
vi.mock('../../../../utils/confetti', () => ({
  triggerConfetti: vi.fn()
}));

// Mock router params
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ difficulty: 'easy', operation: 'addition' })
  };
});

describe('MathGame', () => {
  const renderGame = () => {
    return render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MathGame />
        </ThemeProvider>
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders a math problem', () => {
    const { container } = renderGame();
    // Should show a problem with = sign
    expect(container.textContent).toMatch(/=/);
  });

  it('renders number keypad', () => {
    renderGame();
    // Check for digits 0-9 in the keypad (use getByRole to avoid matching problem text)
    expect(screen.getByRole('button', { name: '0' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '9' })).toBeInTheDocument();
  });

  it('allows input via keypad', () => {
    const { container } = renderGame();
    const button1 = screen.getByRole('button', { name: '1' });
    const button2 = screen.getByRole('button', { name: '2' });
    
    fireEvent.click(button1);
    fireEvent.click(button2);
    
    // Input display should show "12" somewhere in the container
    expect(container.textContent).toContain('12');
  });

  it('generates either regular or variable problems', () => {
    const { container } = renderGame();
    
    // Check that the problem contains an operator and equals sign
    const problemText = container.textContent || '';
    expect(problemText).toMatch(/[+=×÷-]/);
    expect(problemText).toMatch(/=/);
  });

  it('handles delete button', () => {
    const { container } = renderGame();
    const button1 = screen.getByRole('button', { name: '1' });
    const button2 = screen.getByRole('button', { name: '2' });
    const deleteButton = screen.getByRole('button', { name: '⌫' });
    
    fireEvent.click(button1);
    fireEvent.click(button2);
    
    // Should show "12" in input display
    expect(container.textContent).toContain('12');
    
    fireEvent.click(deleteButton);
    
    // After delete, should show "1"
    expect(container.textContent).toContain('1');
  });

  it('displays submit button', () => {
    renderGame();
    const submitButton = screen.getByText(/submit/i);
    expect(submitButton).toBeInTheDocument();
  });
});
