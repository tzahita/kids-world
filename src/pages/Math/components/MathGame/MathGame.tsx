import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { triggerConfetti } from '../../../../utils/confetti';
import {
  GameContainer,
  ProblemCard,
  ProblemText,
  InputDisplay,
  Keypad,
  Key,
  SubmitButton,
} from './MathGameStyled';

export default function MathGame() {
  const { difficulty, operation } = useParams();
  const { t } = useTranslation();
  const [problem, setProblem] = useState({ a: 0, b: 0, operator: '+' });
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateProblem = useCallback(() => {
    let min = 1;
    let max = 10;

    if (difficulty === 'medium') max = 20;
    if (difficulty === 'hard') max = 100;

    let op = '+';
    if (operation === 'subtraction') op = '-';
    if (operation === 'multiplication') { op = '×'; max = 10; } // Keep multiply numbers small
    if (operation === 'division') { op = '÷'; max = 20; }

    let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    // Adjust for constraints
    if (op === '-') {
      if (num1 < num2) [num1, num2] = [num2, num1]; // Ensure positive result
    } else if (op === '÷') {
      num1 = num2 * (Math.floor(Math.random() * 10) + 1); // Ensure divisibility
    }

    setProblem({ a: num1, b: num2, operator: op });
    setInput('');
    setIsCorrect(null);
  }, [difficulty, operation]);

  useEffect(() => {
    generateProblem();
  }, [generateProblem]);

  const handleInput = (val: string) => {
    if (isCorrect) return; // Block input during success
    setInput((prev) => prev.length < 3 ? prev + val : prev);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const checkAnswer = () => {
    if (!input) return;
    
    let expected = 0;
    const { a, b, operator } = problem;
    const val = parseInt(input);

    switch (operator) {
      case '+': expected = a + b; break;
      case '-': expected = a - b; break;
      case '×': expected = a * b; break;
      case '÷': expected = a / b; break;
    }

    if (val === expected) {
      setIsCorrect(true);
      triggerConfetti();
      setTimeout(generateProblem, 1000); // reduced wait for better flow
    } else {
      setIsCorrect(false);
      setInput(''); // Clear wrong answer
    }
  };

  return (
    <GameContainer>
      <ProblemCard
        animate={isCorrect === false ? { x: [-10, 10, -10, 10, 0] } : {}}
      >
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={`${problem.a}-${problem.operator}-${problem.b}`}
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ProblemText>
              {problem.a} {problem.operator} {problem.b} = ?
            </ProblemText>
          </motion.div>
        </AnimatePresence>
        <InputDisplay $isCorrect={isCorrect === true}>
          {input}
        </InputDisplay>
      </ProblemCard>

      <Keypad>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <Key key={num} onClick={() => handleInput(num.toString())}>
            {num}
          </Key>
        ))}
        <Key $action onClick={handleDelete}>⌫</Key>
        <SubmitButton onClick={checkAnswer}>
          {t('math.submit')}
        </SubmitButton>
      </Keypad>
    </GameContainer>
  );
}
