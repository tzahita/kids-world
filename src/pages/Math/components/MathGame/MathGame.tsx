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
  const [problem, setProblem] = useState({ 
    numbers: [0, 0],
    operator: '+',
    isVariable: false,
    variableIndex: 0
  });
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateProblem = useCallback(() => {
    let min = 1;
    let max = 10;

    if (difficulty === 'medium') max = 20;
    if (difficulty === 'hard') max = 100;

    let op = '+';
    if (operation === 'subtraction') op = '-';
    if (operation === 'multiplication') { op = '×'; max = 10; }
    if (operation === 'division') { op = '÷'; max = 20; }

    // Determine number of operands (2-4, with 30% chance of 3-4)
    const useMultiNumber = Math.random() < 0.3;
    const numCount = useMultiNumber ? (Math.random() < 0.5 ? 3 : 4) : 2;
    
    // Generate numbers
    const nums: number[] = [];
    for (let i = 0; i < numCount; i++) {
      nums.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    // Adjust for constraints (only for 2-number problems or special operations)
    if (op === '-' && numCount === 2) {
      if (nums[0] < nums[1]) [nums[0], nums[1]] = [nums[1], nums[0]]; // Ensure positive result
    } else if (op === '÷' && numCount === 2) {
      nums[0] = nums[1] * (Math.floor(Math.random() * 10) + 1); // Ensure divisibility
    }
    
    // For subtraction/division with multiple numbers, keep it simple (only addition/multiplication work well with 3-4 numbers)
    if ((op === '-' || op === '÷') && numCount > 2) {
      // Convert to addition for multi-number problems
      op = '+';
    }

    // Randomly decide if this is a variable problem (50% chance)
    const isVariable = Math.random() > 0.5;
    const variableIndex = isVariable ? Math.floor(Math.random() * numCount) : 0;

    setProblem({ 
      numbers: nums,
      operator: op,
      isVariable,
      variableIndex
    });
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

  const calculateResult = (numbers: number[], operator: string) => {
    if (numbers.length === 0) return 0;
    
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      switch (operator) {
        case '+': result += numbers[i]; break;
        case '-': result -= numbers[i]; break;
        case '×': result *= numbers[i]; break;
        case '÷': result /= numbers[i]; break;
      }
    }
    return result;
  };

  const solveForVariable = (numbers: number[], operator: string, varIndex: number) => {
    // Create a copy and remove the variable position
    const knownNumbers = [...numbers];
    knownNumbers.splice(varIndex, 1);
    
    // Calculate what the total should be (the result shown to user)
    const totalResult = calculateResult(numbers, operator);
    
    // Solve for the missing number
    if (operator === '+') {
      // x is in the sum, so x = total - sum of known numbers
      const sumOfKnown = knownNumbers.reduce((a, b) => a + b, 0);
      return totalResult - sumOfKnown;
    } else if (operator === '×') {
      // x is in the product, so x = total / product of known numbers
      const productOfKnown = knownNumbers.reduce((a, b) => a * b, 1);
      return totalResult / productOfKnown;
    } else if (operator === '-') {
      // For subtraction: a - b - x = result, so x = a - b - result
      if (varIndex === 0) {
        // x - b = result, so x = result + b
        return totalResult + numbers[1];
      } else {
        // a - x = result, so x = a - result
        return numbers[0] - totalResult;
      }
    } else if (operator === '÷') {
      // For division
      if (varIndex === 0) {
        // x ÷ b = result, so x = result * b
        return totalResult * numbers[1];
      } else {
        // a ÷ x = result, so x = a / result
        return numbers[0] / totalResult;
      }
    }
    return 0;
  };

  const checkAnswer = () => {
    if (!input) return;
    
    const { numbers, operator, isVariable, variableIndex } = problem;
    const val = parseInt(input);
    let expected = 0;

    if (isVariable) {
      // Solve for the variable
      expected = solveForVariable(numbers, operator, variableIndex);
    } else {
      // Regular problem - calculate result
      expected = calculateResult(numbers, operator);
    }

    if (val === expected) {
      setIsCorrect(true);
      triggerConfetti();
      setTimeout(generateProblem, 1000);
    } else {
      setIsCorrect(false);
      setInput('');
    }
  };

  return (
    <GameContainer>
      <ProblemCard
        animate={isCorrect === false ? { x: [-10, 10, -10, 10, 0] } : {}}
      >
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={problem.numbers.join('-')}
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ProblemText>
              {problem.numbers.map((num, idx) => (
                <span key={idx}>
                  {problem.isVariable && idx === problem.variableIndex ? '?' : num}
                  {idx < problem.numbers.length - 1 && ` ${problem.operator} `}
                </span>
              ))}
              {' = '}
              {problem.isVariable ? calculateResult(problem.numbers, problem.operator) : '?'}
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
