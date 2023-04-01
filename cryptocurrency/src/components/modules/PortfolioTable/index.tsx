import React from 'react';
import { getDataById } from '../../../api';
import { ContextData } from '../../../App';
import { currencyConversion } from '../../../functions';
import { Button } from '../../ui/button/Button';
import classes from './style.module.scss';
import { ContextType, ChangeType } from '../../../type';

const tableHeader = ['ID', 'Amount', 'Delete'];

export const PortfolioTable = () => {
  const { changes, setChanges, setOldValue } = React.useContext<ContextType>(ContextData);

  const onClick = (id: string) => {
    const newChanges = changes.filter((change) => change.id !== id);
    setChanges(newChanges);
    currencyConversion(setOldValue, newChanges);
  };

  return (
    <div className={classes.table}>
      <div className={`${classes.header} ${classes.row}`}>
        {tableHeader.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {Object.entries(
        changes.reduce((acc: { [key: string]: number }, item) => {
          const key = item.id;
          return acc[key]
            ? { ...acc, [key]: item.value + acc[key] }
            : { ...acc, [key]: item.value };
        }, {})
      ).map((item) => (
        <div key={item[0]} className={classes.row}>
          <span>{item[0]}</span>
          <span>{String(item[1])}</span>
          <Button
            onClick={() => {
              onClick(item[0]);
            }}
          >
            delete
          </Button>
        </div>
      ))}
    </div>
  );
};
