import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'electric';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'pill px-4 py-1 text-xs font-bold uppercase tracking-wider border-2';
  
  const variants = {
    default: 'bg-stark-white text-raw-black border-raw-black',
    electric: 'bg-electric-blue text-stark-white border-raw-black'
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
