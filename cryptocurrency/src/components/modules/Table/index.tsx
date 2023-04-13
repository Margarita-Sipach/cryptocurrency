import { useState } from 'react';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import { Modal } from '../../ui/Modal';
import { CryptoType } from '../../../type';
import { Form } from '../Form';
import { Pagination } from '../Pagination';
import { TableHeader } from '../../ui/TableHeader';
import { useTableState } from '../../../hooks';
import { Button } from '../../ui/button/Button';

const fields: Array<keyof CryptoType> = [
  'rank',
  'name',
  'priceUsd',
  'marketCapUsd',
  'vwap24Hr',
  'maxSupply',
  'supply',
  'volumeUsd24Hr',
  'changePercent24Hr',
];

export const Table = ({ id }: { id?: string }) => {
  const [isVisibleAddModal, setIsVisibleAddModal] = useState<boolean>(false);
  const [currentIdModal, setCurrentIdModal] = useState<string>('');
  const [activePage, setActivePage] = useState<number>(1);
  const data = useTableState(id || '', activePage);

  const onClick = (e: React.MouseEvent, id?: string) => {
    if (id) {
      e.preventDefault();
      e.stopPropagation();
      setCurrentIdModal(id);
      setIsVisibleAddModal(true);
    } else {
      console.log('Id is not defined');
    }
  };

  return (
    <div className={classes.table} data-cy="table">
      <TableHeader />
      {data &&
        (Array.isArray(data) ? data : [data]).map((item: CryptoType) => (
          <Link
            key={item.id.repeat(2)}
            className={classes.row}
            to={`/cryptocurrency/${item.id}`}
            data-cy="table-row"
            id={item.id}
          >
            {fields.map((key, index) => {
              return (
                <div key={key} className={classes.ceil} data-cy={key.toLowerCase()}>
                  {item[key] ? (+item[key] && index ? (+item[key]).toFixed(3) : item[key]) : '---'}
                </div>
              );
            })}
            <div
              className={classes.ceil}
              onClick={(e) => e.stopPropagation()}
              data-cy="table-button"
            >
              <Button type="add" onClick={onClick} id={item.id} />
            </div>
          </Link>
        ))}
      {isVisibleAddModal && (
        <Modal onOpenModal={setIsVisibleAddModal}>
          <Form id={currentIdModal} onOpenModal={setIsVisibleAddModal} />
        </Modal>
      )}
      {Array.isArray(data) && (
        <Pagination onPageClick={setActivePage} activePage={activePage} pageAmount={data.length} />
      )}
    </div>
  );
};
