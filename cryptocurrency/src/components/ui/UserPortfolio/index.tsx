import React, { useEffect, useState } from 'react';
import { getDataById } from '../../../api';
import { ContextData } from '../../../App';
import { useUserPortfolio } from '../../../hooks';
import classes from './style.module.scss';

interface UserPortfolioProps {
  onClick: (arg: boolean) => void;
}

export const UserPortfolio = ({ onClick }: UserPortfolioProps) => {
  const [oldValue, newValue] = useUserPortfolio();

  return (
    <div className={classes.portfolio} onClick={() => onClick(true)}>
      <span className={classes.title}>User Portfolio</span>
      <div>
        <span className={classes.value}>$ {newValue.toFixed(3)}</span>
        <span className={`${classes.diff} ${newValue - oldValue < 0 ? classes.low : classes.high}`}>
          {(newValue - oldValue || 0).toFixed(3)} (
          {oldValue ? ((newValue / oldValue - 1) * 100).toFixed(3) : 0}
          %)
        </span>
      </div>
    </div>
  );
};
