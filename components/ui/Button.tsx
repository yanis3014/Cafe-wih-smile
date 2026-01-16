import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'pill px-8 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 border-brutalist';
  
  const variants = {
    primary: 'bg-electric-blue text-stark-white border-raw-black hover:bg-raw-black hover:text-electric-blue',
    secondary: 'bg-stark-white text-raw-black border-raw-black hover:bg-raw-black hover:text-stark-white',
    ghost: 'bg-transparent text-raw-black border-raw-black hover:bg-raw-black hover:text-stark-white'
  };

  // Separate motion props from button props
  const { onDrag, onDragStart, onDragEnd, ...buttonProps } = props;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...buttonProps}
    >
      {children}
    </motion.button>
  );
}
