import React from 'react';
import classes from './style.module.scss';

interface ButtonProps {
  children: string | number;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
    >
      {children}
    </button>
  );
};
