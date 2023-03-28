import React from 'react';
import classes from './style.module.scss';

interface CryptoElementProps {
  title: string;
  price: number;
  className?: string;
}

export const CryptoElement = ({ title, price, className }: CryptoElementProps) => {
  return (
    <div className={`${classes.element} ${className}`}>
      <span className={classes.title}>{title}</span>
      <span className={classes.price}>$ {price.toFixed(3)}</span>
    </div>
  );
};
