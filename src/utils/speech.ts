export const speak = (
  text: string, 
  lang: 'en-US' | 'he-IL' = 'en-US',
  onStart?: () => void,
  onEnd?: () => void
) => {
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.7;

  const voices = window.speechSynthesis.getVoices();
  let voice = voices.find(v => v.lang === lang);
  
  if (!voice) {
    const shortLang = lang.split('-')[0];
    voice = voices.find(v => v.lang.startsWith(shortLang));
  }

  const googleVoice = voices.find(v => v.lang === lang && v.name.includes('Google'));
  if (googleVoice) {
    voice = googleVoice;
  }

  if (voice) {
    utterance.voice = voice;
  }

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;

  window.speechSynthesis.speak(utterance);
};
