import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const baseStyles = 'border-heavy bg-stark-white p-6 transition-all duration-300';
  
  const cardContent = (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );

  if (hover) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}
