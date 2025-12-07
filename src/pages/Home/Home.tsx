import {
  PageContainer,
  Title,
  Grid,
  Card,
  IconWrapper,
  Label,
} from './HomeStyled';

import { Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Home() {
  const { t } = useTranslation();

  const features = [
    { path: '/math', label: t('home.math'), icon: '🔢', color: 'primary' },
    { path: '/hebrew', label: t('home.hebrew'), icon: 'א', color: 'secondary' },
    { path: '/english', label: t('home.english'), icon: 'A', color: 'accent' },
    { path: '/memory', label: t('home.memory'), icon: '🧠', color: 'success' },
  ];

  return (
    <PageContainer>
      <Title
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        {t('home.welcome')}
      </Title>

      <Grid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature) => (
          <Card
            key={feature.path}
            to={feature.path}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <IconWrapper $bgColor={feature.color}>
              {feature.icon}
            </IconWrapper>
            <Label>{feature.label}</Label>
          </Card>
        ))}
      </Grid>
    </PageContainer>
  );
}
