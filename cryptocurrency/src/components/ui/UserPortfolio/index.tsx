import React, { useEffect, useState } from 'react';
import { getDataById } from '../../../api';
import { ContextData } from '../../../App';
import classes from './style.module.scss';

interface UserPortfolioProps {
  onClick: (arg: boolean) => void;
}

export const UserPortfolio = ({ onClick }: UserPortfolioProps) => {
  const { oldValue, changes, setIsLoading } = React.useContext(ContextData);
  const [newValue, setNewValue] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    if (changes.length > 0) {
      try {
        Promise.all(changes.map((item) => getDataById(item.id)))
          .then((values) => {
            setNewValue(
              values.reduce((acc, item, index) => acc + item.priceUsd * changes[index].value, 0)
            );
          })
          .then(() => setIsLoading(false));
      } catch (err) {
        console.log(err);
      }
    } else {
      setNewValue(0);
      setIsLoading(false);
    }
  }, [changes, newValue, oldValue, setIsLoading]);

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
