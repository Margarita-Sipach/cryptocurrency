import { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import { Modal } from '../../ui/Modal';
import { AddButton } from '../../ui/button/AddButton';
import { CryptoType } from '../../../type';
import { Form } from '../Form';
import { getAllData, getDataById } from '../../../api';

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

const fields = [
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
  const [data, setData] = useState([]);
  const [isVisibleAddModal, setIsVisibleAddModal] = useState(false);
  const [currentIdModal, setCurrentIdModal] = useState('');
  const [activePage, setActivePage] = useState(1);

  const handleClickOnPaginationItem = (e: React.MouseEvent) => {
    setActivePage(+((e.target as HTMLElement).textContent || 1));
  };

  useEffect(() => {
    (id ? getDataById(id) : getAllData(10, activePage * 10 - 10)).then((item) => setData(item));
  }, [activePage, id]);

  return (
    <div className={classes.table}>
      <div className={`${classes.row} ${classes.header}`}>
        {tableHeader.map((item) => (
          <div key={item} className={classes.ceil}>
            {item}
          </div>
        ))}
      </div>

      {data &&
        (Array.isArray(data) ? data : [data]).map((item: CryptoType) => (
          <Link key={item.id.repeat(2)} className={classes.row} to={`/${item.id}`}>
            {fields.map((val) => (
              <div key={val} className={classes.ceil}>
                {+item[val as keyof CryptoType]
                  ? (+item[val as keyof CryptoType]).toFixed(3)
                  : item[val as keyof CryptoType]}
              </div>
            ))}
            <div className={classes.ceil} onClick={(e) => e.stopPropagation()}>
              <AddButton
                id={item.id}
                onModal={setIsVisibleAddModal}
                getModalId={setCurrentIdModal}
              />
            </div>
          </Link>
        ))}
      {isVisibleAddModal && (
        <Modal onClick={setIsVisibleAddModal}>
          <Form id={currentIdModal} />
        </Modal>
      )}
      <div className={classes.pagination}>
        {Array.from({ length: data.length }, (_, index) => index + 1).map((item) => (
          <button
            key={item}
            className={`${classes.pagination__item} ${
              activePage === item && classes.pagination__item_active
            }`}
            onClick={(e: React.MouseEvent) => handleClickOnPaginationItem(e)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
