import { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  PageWrapper,
  Header,
  Emoji,
  Title,
  ContentContainer,
} from './FeaturePageLayoutStyled';

interface FeaturePageLayoutProps {
  title: string;
  emoji: string;
  color: string;
  children?: ReactNode;
  hideHeader?: boolean;
}

export default function FeaturePageLayout({ title, emoji, color, children, hideHeader = false }: FeaturePageLayoutProps) {
  return (
    <PageWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {!hideHeader && (
          <Header
            $color={color}
            initial={{ y: -50, opacity: 0, height: 'auto', marginBottom: '1.5rem' }}
            animate={{ y: 0, opacity: 1, height: 'auto', marginBottom: '1.5rem' }}
            exit={{ y: -20, opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
            transition={{
              default: { type: 'spring', stiffness: 100, damping: 20 },
              height: { duration: 0.4, type: 'tween', ease: 'easeInOut' },
              marginBottom: { duration: 0.4, type: 'tween', ease: 'easeInOut' },
              opacity: { duration: 0.2 }
            }}
          >
            <Emoji
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            >
              {emoji}
            </Emoji>
            <Title
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </Title>
          </Header>
        )}
      </AnimatePresence>
      
      <ContentContainer
        layout
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {children}
      </ContentContainer>
    </PageWrapper>
  );
}
