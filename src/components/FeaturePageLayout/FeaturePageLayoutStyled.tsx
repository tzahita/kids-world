import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled(motion.div)<{ $color: string }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm};
  text-align: center;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
`;

export const Emoji = styled(motion.span)`
  font-size: 3rem;
  display: block;
  margin-bottom: 0;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled(motion.h1)`
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ContentContainer = styled(motion.div)<{ $scrollable?: boolean }>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $scrollable }) => ($scrollable ? 'flex-start' : 'center')};
  overflow-y: ${({ $scrollable }) => ($scrollable ? 'auto' : 'hidden')};
  overflow-x: hidden;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const PlaceholderText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;
