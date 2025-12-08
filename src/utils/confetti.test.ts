import { describe, it, expect, vi } from 'vitest';
import { triggerConfetti } from './confetti';
import confetti from 'canvas-confetti';

// Mock the canvas-confetti module
vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

describe('triggerConfetti', () => {
  it('should call the confetti function', () => {
    triggerConfetti();
    expect(confetti).toHaveBeenCalled();
  });
});
