import React from 'react';
import { getDataById } from '../../../api';
import { ContextData } from '../../../App';
import { Button } from '../../ui/button/Button';
import classes from './style.module.scss';

const tableHeader = ['ID', 'Amount', 'Delete'];

export const PortfolioTable = () => {
  const { changes, setChanges, setOldValue } = React.useContext(ContextData);

  const handleClick = async (id: string) => {
    const newChanges = changes.filter((change) => change.id !== id);
    setChanges(newChanges);

    await getDataById(id).then(() => {
      setChanges(newChanges);
    });

    await Promise.all(newChanges.map((item) => getDataById(item.id))).then((values) => {
      setOldValue(
        values.reduce((acc, item, index) => acc + item.priceUsd * newChanges[index].value, 0)
      );
    });
  };

  return (
    <div className={classes.table}>
      <div className={`${classes.header} ${classes.row}`}>
        {tableHeader.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      {Object.entries(
        changes.reduce(
          (acc, item) =>
            acc[item.id as keyof object]
              ? { ...acc, [item.id]: item.value + acc[item.id as keyof object] }
              : { ...acc, [item.id]: item.value },
          {}
        )
      ).map((item) => (
        <div key={item[0]} className={classes.row}>
          <span>{item[0]}</span>
          <span>{item[1] as string}</span>
          <Button
            onClick={(e) => {
              handleClick(item[0]);
            }}
          >
            delete
          </Button>
        </div>
      ))}
    </div>
  );
};
