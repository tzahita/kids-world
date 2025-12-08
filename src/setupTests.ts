import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

// Mock canvas-confetti global
vi.mock('canvas-confetti', () => ({
  default: vi.fn(),
}));

// Mock Web Audio API
window.AudioContext = vi.fn().mockImplementation(() => ({
  createOscillator: () => ({
    connect: vi.fn(),
    start: vi.fn(),
    stop: vi.fn(),
    type: 'sine',
    frequency: { value: 0 },
  }),
  createGain: () => ({
    connect: vi.fn(),
    gain: {
      exponentialRampToValueAtTime: vi.fn(),
    },
  }),
  state: 'suspended',
  resume: vi.fn(),
  destination: {},
  currentTime: 0,
}));

// Mock Speech Synthesis
Object.defineProperty(window, 'speechSynthesis', {
  value: {
    speak: vi.fn(),
    cancel: vi.fn(),
    pause: vi.fn(),
    resume: vi.fn(),
    getVoices: () => [],
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    onvoiceschanged: null,
  },
  writable: true,
});


