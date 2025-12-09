import { Variants } from "framer-motion";

export interface DifficultyOption {
  id: string;
  title: string;
  description?: string;
  icon: string;
  color: string;
  path: string;
}

export interface DifficultySelectionProps {
  title: string;
  options: DifficultyOption[];
  children?: React.ReactNode;
}

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardVariants: Variants = {
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