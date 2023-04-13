import React from 'react';
import classes from './style.module.scss';
import { ButtonProps } from './type';

export const Button = ({ type = '', id, children, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${classes[type]} ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onClick && (id ? onClick(e, id) : onClick(e));
      }}
      data-cy={type === 'add' && 'add-button'}
    >
      {type === 'add' ? '+' : children}
    </button>
  );
};
