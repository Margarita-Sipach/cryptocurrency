import React from 'react';
import classes from './style.module.scss';
import { ButtonProps } from './type';

export const Button = ({ children, onClick, className = '' }: ButtonProps) => {
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
