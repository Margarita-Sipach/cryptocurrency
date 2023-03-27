import React from 'react';
import { ContextData } from '../../../App';
import { Button } from '../../ui/button/Button';
import classes from './style.module.scss';

const tableHeader = ['ID', 'Amount', 'Delete'];

export const PortfolioTable = () => {
  const { changes } = React.useContext(ContextData);

  return (
    <div className={classes.table}>
      <div className={`${classes.header} ${classes.row}`}>
        {tableHeader.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {changes.map((item) => (
        <div key={item.id} className={classes.row}>
          <span>{item.id}</span>
          <span>{item.value}</span>
          <Button onClick={() => {}}>delete</Button>
        </div>
      ))}
    </div>
  );
};
