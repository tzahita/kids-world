import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-size: 2rem;
  text-align: center;
`;

export const ImageContainer = styled.div`
  font-size: 8rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  filter: drop-shadow(0 4px 0 rgba(0,0,0,0.1));
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

export const DropZoneContainer = styled.div<{ $direction?: 'ltr' | 'rtl' }>`
  display: flex;
  direction: ${({ $direction }) => $direction || 'ltr'};
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  justify-content: center;
`;

export const DropSlot = styled.div<{ $isFilled: boolean; $isCorrect?: boolean }>`
  width: 60px;
  height: 80px;
  border: ${({ theme }) => theme.borders.thin};
  border-style: dashed;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme, $isFilled, $isCorrect }) => 
    $isCorrect ? theme.colors.success + '40' : 
    $isFilled ? theme.colors.surface : 
    'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textMain};
  position: relative;
`;

export const LettersBank = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  width: 100%;
`;

export const DraggableLetter = styled(motion.div)<{ $used?: boolean }>`
  width: 50px;
  height: 60px;
  background: white;
  border: ${({ theme }) => theme.borders.thin};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: grab;
  color: ${({ theme }) => theme.colors.textMain};
  opacity: ${({ $used }) => $used ? 0.3 : 1};
  pointer-events: ${({ $used }) => $used ? 'none' : 'auto'};

  &:active {
    cursor: grabbing;
    transform: scale(1.1);
  }
`;

export const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;
