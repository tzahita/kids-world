import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { triggerConfetti } from '../../../utils/confetti';
import {
  GameContainer,
  Title,
  StatusText,
  SimonGrid,
  ColorButton,
  StartButton,
  Score
} from './SimonSaysStyled';

type Color = 'red' | 'blue' | 'green' | 'yellow';
const COLORS: Color[] = ['green', 'red', 'yellow', 'blue'];

const COLOR_MAP = {
  green: '#4CAF50',
  red: '#F44336',
  yellow: '#FFEB3B',
  blue: '#2196F3'
};

const SOUND_FREQS = {
  green: 261.63, // C4
  red: 329.63,   // E4
  yellow: 392.00, // G4
  blue: 523.25   // C5
};

export default function SimonSays() {
  const { t } = useTranslation();
  const [sequence, setSequence] = useState<Color[]>([]);
  const [playerSequence, setPlayerSequence] = useState<Color[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [activeColor, setActiveColor] = useState<Color | null>(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  
  // Audio context ref
  const audioCtx = useRef<AudioContext | null>(null);

  const playSound = useCallback((color: Color) => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    if (audioCtx.current.state === 'suspended') {
      audioCtx.current.resume();
    }

    const osc = audioCtx.current.createOscillator();
    const gain = audioCtx.current.createGain();

    osc.type = 'sine';
    osc.frequency.value = SOUND_FREQS[color];
    osc.connect(gain);
    gain.connect(audioCtx.current.destination);

    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.current.currentTime + 0.5);
    osc.stop(audioCtx.current.currentTime + 0.5);
  }, []);

  const flashColor = useCallback((color: Color) => {
    setActiveColor(color);
    playSound(color);
    setTimeout(() => {
      setActiveColor(null);
    }, 400); // reduced from 500 for snapiness
  }, [playSound]);

  const playSequence = useCallback(async (seq: Color[]) => {
    setIsPlayerTurn(false);
    setMessage(t('game.watch')); // Assuming we have or will add this key, or use hardcoded/logic specific

    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800)); // Delay between flashes
      flashColor(seq[i]);
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsPlayerTurn(true);
    setMessage(t('game.yourTurn'));
  }, [flashColor, t]);

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setScore(0);
    setIsPlaying(true);
    addToSequence([]);
  };

  const addToSequence = (currentSeq: Color[]) => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    const newSeq = [...currentSeq, randomColor];
    setSequence(newSeq);
    setPlayerSequence([]);
    playSequence(newSeq);
  };

  const handleColorClick = (color: Color) => {
    if (!isPlaying || !isPlayerTurn) return;

    flashColor(color);
    
    const newPlayerSeq = [...playerSequence, color];
    setPlayerSequence(newPlayerSeq);

    // Validate
    const currentIndex = newPlayerSeq.length - 1;
    if (color !== sequence[currentIndex]) {
      // Game Over
      setMessage(t('game.gameOver'));
      setIsPlaying(false);
      setIsPlayerTurn(false);
      return;
    }

    // Level Complete?
    if (newPlayerSeq.length === sequence.length) {
      setScore(s => s + 1);
      if (score > 0 && score % 5 === 0) triggerConfetti();
      setIsPlayerTurn(false);
      setMessage(t('game.goodJob'));
      setTimeout(() => addToSequence(sequence), 1000);
    }
  };

  return (
    <GameContainer>
      <Title>{t('logic.games.simonSays.title')}</Title>
      
      <Score>{t('game.score')}: {score}</Score>
      <StatusText>{message}</StatusText>

      <SimonGrid>
        {COLORS.map((color) => (
          <ColorButton
            key={color}
            $color={COLOR_MAP[color]}
            $isActive={activeColor === color}
            onClick={() => handleColorClick(color)}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </SimonGrid>

      {!isPlaying && (
        <StartButton onClick={startGame}>
          {sequence.length > 0 ? t('game.playAgain') : t('game.start')}
        </StartButton>
      )}
    </GameContainer>
  );
}
