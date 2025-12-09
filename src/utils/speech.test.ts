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
    constructor(text: string) {
      this.text = text;
      mockUtteranceConstructor(text);
    }
  }

  // Save original getVoices to restore later if needed, though we reset in setupTests usually
  const originalGetVoices = window.speechSynthesis.getVoices;

  beforeEach(() => {
    vi.stubGlobal('SpeechSynthesisUtterance', MockSpeechSynthesisUtterance);
    // Directly mock getVoices on the global object
    window.speechSynthesis.getVoices = vi.fn().mockReturnValue([]);
    // Mock cancel and speak to track calls
    window.speechSynthesis.cancel = vi.fn();
    window.speechSynthesis.speak = vi.fn();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    window.speechSynthesis.getVoices = originalGetVoices;
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

  it('fallback to short language code if exact match not found', () => {
    const mockVoices = [
      { lang: 'en-GB', name: 'British English', localService: true, default: true },
    ];
    (window.speechSynthesis.getVoices as any).mockReturnValue(mockVoices);

    speak('Hello', 'en-US');
    
    const speakCall = (window.speechSynthesis.speak as any).mock.calls[0][0];
    expect(speakCall.voice.name).toBe('British English');
  });
});
