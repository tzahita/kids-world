import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent page scrolling */
  padding-bottom: 80px; /* Space for mobile nav */

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontFun};
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const DesktopNav = styled.nav`
  display: none;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  transition: all 0.2s;
  color: ${({ theme }) => theme.colors.textMuted};
  position: relative;

  &.active {
    color: white;
  }
`;

export const ActiveBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  z-index: -1;
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const MobileNav = styled.nav`
  position: fixed;
  bottom: 0;
  inset-inline: 0;
  background: ${({ theme }) => theme.colors.glass.bg};
  backdrop-filter: blur(${({ theme }) => theme.colors.glass.blur});
  border-top: 1px solid ${({ theme }) => theme.colors.glass.border};
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 100;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: color 0.2s;
  position: relative;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileActiveIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  inset-inline: 0; 
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary}1A; /* 10% opacity */
  border-radius: ${({ theme }) => theme.borderRadius.md};
  z-index: -1;
`;

export const LanguageButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.typography.fontMain};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
