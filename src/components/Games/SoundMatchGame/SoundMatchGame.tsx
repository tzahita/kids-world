import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { triggerConfetti } from '../../../utils/confetti';
import {
  GameWrapper,
  Title,
  SoundButton,
  OptionsGrid,
  OptionCard,
} from './SoundMatchGameStyled';

interface WordData {
  word: string;
  emoji: string;
}

interface SoundMatchGameProps {
  words: WordData[];
  titleKey: string;
  lang: 'en' | 'he';
}

export default function SoundMatchGame({ words, titleKey, lang }: SoundMatchGameProps) {
  const { t } = useTranslation();
  const [targetWord, setTargetWord] = useState<WordData | null>(null);
  const [options, setOptions] = useState<WordData[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const generateLevel = () => {
    const target = words[Math.floor(Math.random() * words.length)];
    
    // Generate distractors
    const distractors = words
      .filter(w => w.word !== target.word)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    
    const allOptions = [target, ...distractors].sort(() => Math.random() - 0.5);
    
    setTargetWord(target);
    setOptions(allOptions);
    setSelected(null);
    setIsCorrect(null);
    
    // Auto-play sound after short delay
    setTimeout(() => playSound(target.word), 500);
  };

  useEffect(() => {
    generateLevel();
  }, [words]);

  const playSound = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'he' ? 'he-IL' : 'en-US';
    
    // Try to find a good voice
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.startsWith(lang === 'he' ? 'he' : 'en'));
    if (voice) utterance.voice = voice;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const handleSelect = (word: string) => {
    if (isCorrect === true) return;
    
    setSelected(word);
    const correct = word === targetWord?.word;
    setIsCorrect(correct);

    if (correct) {
      triggerConfetti();
      setTimeout(generateLevel, 1500);
    } else {
      setTimeout(() => {
        setSelected(null);
        setIsCorrect(null);
      }, 1000);
    }
  };

  if (!targetWord) return null;

  return (
    <GameWrapper>
      <Title>{t(titleKey)}</Title>
      
      <SoundButton
        onClick={() => playSound(targetWord.word)}
        whileTap={{ scale: 0.9 }}
        animate={isPlaying ? { scale: [1, 1.1, 1], transition: { repeat: Infinity } } : {}}
      >
        🔊
      </SoundButton>

      <OptionsGrid>
        {options.map((opt, i) => (
          <OptionCard
            key={i}
            onClick={() => handleSelect(opt.word)}
            $isCorrect={selected === opt.word && isCorrect === true}
            $isWrong={selected === opt.word && isCorrect === false}
            disabled={isCorrect === true}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {opt.emoji}
          </OptionCard>
        ))}
      </OptionsGrid>
    </GameWrapper>
  );
}
