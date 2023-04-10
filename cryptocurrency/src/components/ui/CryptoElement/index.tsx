import React from 'react';
import classes from './style.module.scss';
import { CryptoElementProps } from './type';

export const CryptoElement = ({ title, price, className }: CryptoElementProps) => {
  return (
    <div className={`${classes.element} ${className}`} data-cy="popular-currency">
      <span className={classes.title} data-cy="popular-currency-name">
        {title}
      </span>
      <span className={classes.price} data-cy="popular-currency-price">
        $ {price.toFixed(3)}
      </span>
    </div>
  );
};
