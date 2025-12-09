// Keep a global reference to prevent garbage collection bug on some browsers
let currentUtterance: SpeechSynthesisUtterance | null = null;
void currentUtterance; // Prevent lint error active reference check

export const speak = (
  text: string, 
  lang: 'en-US' | 'he-IL' = 'en-US',
  onStart?: () => void,
  onEnd?: () => void
) => {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Keep strict reference
  currentUtterance = utterance;

  utterance.lang = lang;
  utterance.rate = 0.8; // Slightly slower for kids

  // Handle voices
  const loadAndSpeak = () => {
    const voices = window.speechSynthesis.getVoices();
    let voice = voices.find(v => v.lang === lang);
    
    // If no exact match, try to find a voice that starts with the language code
    if (!voice) {
      const shortLang = lang.split('-')[0];
      voice = voices.find(v => v.lang.startsWith(shortLang));
    }

    // Special handling for Android: Prioritize Google voices
    const googleVoice = voices.find(v => v.lang === lang && v.name.includes('Google'));
    if (googleVoice) {
      voice = googleVoice;
    }

    if (voice) {
      utterance.voice = voice;
    }

    // Attach callbacks with safe cleanup
    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      currentUtterance = null; // Release reference
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.error('Speech error:', e);
      currentUtterance = null;
      if (onEnd) onEnd(); // Ensure UI resets even on error
    };

    window.speechSynthesis.speak(utterance);
  };

  // If voices are not loaded yet (common on Android first run), wait for them
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null; // Remove listener
      loadAndSpeak();
    };
  } else {
    loadAndSpeak();
  }
};
