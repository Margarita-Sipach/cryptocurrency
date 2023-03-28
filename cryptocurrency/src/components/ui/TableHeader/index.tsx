import classes from './style.module.scss';

const tableHeader = [
  'Rank',
  'Name',
  'Price',
  'Market Cap',
  'VWAP (24Hr)',
  'MAX Supply',
  'Supply',
  'Volume (24Hr)',
  'Change (24Hr)',
  'Add',
];


export const TableHeader = () => {
  return (
    <div className={`${classes.row} ${classes.header}`}>
      {tableHeader.map((item) => (
        <div key={item} className={classes.ceil}>
          {item}
        </div>
      ))}
    </div>
  );
};
