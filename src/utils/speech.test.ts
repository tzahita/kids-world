import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { speak } from './speech';

describe('speak utility', () => {
  // Mock SpeechSynthesisUtterance globally
  const mockUtteranceConstructor = vi.fn();
  class MockSpeechSynthesisUtterance {
    lang = '';
    text = '';
    voice = null;
    rate = 1;
    onstart: (() => void) | null = null;
    onend: (() => void) | null = null;
    onerror: ((e: any) => void) | null = null;
    constructor(text: string) {
      this.text = text;
      mockUtteranceConstructor(text);
    }
  }

  const originalGetVoices = window.speechSynthesis.getVoices;
  const originalOnVoicesChanged = window.speechSynthesis.onvoiceschanged;

  beforeEach(() => {
    vi.stubGlobal('SpeechSynthesisUtterance', MockSpeechSynthesisUtterance);
    // Default setup: voices are ready
    window.speechSynthesis.getVoices = vi.fn().mockReturnValue([{ name: 'Default', lang: 'en-US' }]);
    window.speechSynthesis.cancel = vi.fn();
    window.speechSynthesis.speak = vi.fn();
    window.speechSynthesis.onvoiceschanged = null; // Use property assignment for null
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    window.speechSynthesis.getVoices = originalGetVoices;
    window.speechSynthesis.onvoiceschanged = originalOnVoicesChanged;
    vi.restoreAllMocks();
  });

  it('cancels previous speech and speaks new text', () => {
    speak('Hello');
    expect(window.speechSynthesis.cancel).toHaveBeenCalled();
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
    expect(mockUtteranceConstructor).toHaveBeenCalledWith('Hello');
  });

  it('sets correct language and voice when generic voice exists', () => {
    const mockVoices = [
      { lang: 'en-US', name: 'English Voice', localService: true, default: true },
      { lang: 'he-IL', name: 'Hebrew Voice', localService: true, default: false }
    ];
    (window.speechSynthesis.getVoices as any).mockReturnValue(mockVoices);

    speak('Hello', 'en-US');
    
    const speakCall = (window.speechSynthesis.speak as any).mock.calls[0][0];
    expect(speakCall.lang).toBe('en-US');
    expect(speakCall.voice).toBeTruthy();
    expect(speakCall.voice.name).toBe('English Voice');
  });

  it('prioritizes Google voices for Android', () => {
    const mockVoices = [
      { lang: 'en-US', name: 'Generic English', localService: true, default: true },
      { lang: 'en-US', name: 'Google US English', localService: false, default: false }
    ];
    (window.speechSynthesis.getVoices as any).mockReturnValue(mockVoices);

    speak('Hello', 'en-US');
    
    const speakCall = (window.speechSynthesis.speak as any).mock.calls[0][0];
    expect(speakCall.voice.name).toBe('Google US English');
  });

  it('attaches callbacks correctly', () => {
    const onStart = vi.fn();
    const onEnd = vi.fn();
    
    speak('Hello', 'en-US', onStart, onEnd);
    
    const speakCall = (window.speechSynthesis.speak as any).mock.calls[0][0];
    
    // Simulate events
    if (speakCall.onstart) speakCall.onstart();
    if (speakCall.onend) speakCall.onend();
    
    expect(onStart).toHaveBeenCalled();
    expect(onEnd).toHaveBeenCalled();
  });

  it('waits for voices if list is empty', () => {
    // 1. Initial state: No voices
    (window.speechSynthesis.getVoices as any).mockReturnValue([]);
    
    speak('Wait for me', 'en-US');
    
    // Should NOT have called speak yet
    expect(window.speechSynthesis.speak).not.toHaveBeenCalled();
    
    // Should have attached listener
    expect(window.speechSynthesis.onvoiceschanged).toBeTruthy();

    // 2. Simulate voices becoming available
    const mockVoices = [{ lang: 'en-US', name: 'Delayed Voice', localService: true, default: true }];
    (window.speechSynthesis.getVoices as any).mockReturnValue(mockVoices);
    
    // Trigger the listener manually
    const listener = window.speechSynthesis.onvoiceschanged;
    if (typeof listener === 'function') {
      // @ts-ignore
      listener(new Event('voiceschanged'));
    }

    // Now it should have spoken
    expect(window.speechSynthesis.speak).toHaveBeenCalled();
    const speakCall = (window.speechSynthesis.speak as any).mock.calls[0][0];
    expect(speakCall.voice.name).toBe('Delayed Voice');
  });
  
  it('handles error gracefully and resets state', () => {
      const onEnd = vi.fn();
      speak('Error test', 'en-US', undefined, onEnd);
      
      const speakCall = (window.speechSynthesis.speak as any).mock.calls[0][0];
      
      // Simulate error
      if (speakCall.onerror) speakCall.onerror(new Error('Test error'));
      
      expect(onEnd).toHaveBeenCalled();
  });
});
