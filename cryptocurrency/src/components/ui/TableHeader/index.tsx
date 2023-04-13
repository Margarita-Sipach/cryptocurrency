import { tableHeader } from '../../../data';
import classes from './style.module.scss';

export const TableHeader = () => {
  return (
    <div
      className={`${classes.row} ${classes.header}`}
      data-cy="table-header"
      data-testid="table-header"
    >
      {tableHeader.map((item) => (
        <div key={item} className={classes.ceil}>
          {item}
        </div>
      ))}
    </div>
  );
};
