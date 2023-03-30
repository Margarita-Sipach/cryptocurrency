import React, { useEffect, useState } from 'react';
import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import { Modal } from '../../ui/Modal';
import { AddButton } from '../../ui/button/AddButton';
import { CryptoType } from '../../../type';
import { Form } from '../Form';
import { getAllData, getDataById } from '../../../api';
import { Pagination } from '../Pagination';
import { TableHeader } from '../../ui/TableHeader';
import { ContextData } from '../../../App';

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
  const [data, setData] = useState([] as CryptoType[] | CryptoType);
  const [isVisibleAddModal, setIsVisibleAddModal] = useState(false);
  const [currentIdModal, setCurrentIdModal] = useState('');
  const [activePage, setActivePage] = useState(1);
  const { setIsLoading } = React.useContext(ContextData);

  useEffect(() => {
    try {
      setIsLoading(true);
      (id ? getDataById(id) : getAllData(10, activePage * 10 - 10)).then((item) => {
        setData(item);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  }, [activePage, id, setIsLoading]);

  return (
    <div className={classes.table}>
      <TableHeader />
      {data &&
        (Array.isArray(data) ? data : [data]).map((item: CryptoType) => (
          <Link key={item.id.repeat(2)} className={classes.row} to={`/${item.id}`}>
            {fields.map((val, index) => {
              const key = val as keyof CryptoType;
              return (
                <div key={val} className={classes.ceil}>
                  {+item[key] && index ? (+item[key]).toFixed(3) : item[key]}
                </div>
              );
            })}
            <div className={classes.ceil} onClick={(e) => e.stopPropagation()}>
              <AddButton
                id={item.id}
                onVisibleModal={setIsVisibleAddModal}
                onGetModalId={setCurrentIdModal}
              />
            </div>
          </Link>
        ))}
      {isVisibleAddModal && (
        <Modal onClick={setIsVisibleAddModal}>
          <Form id={currentIdModal} />
        </Modal>
      )}
      {Array.isArray(data) && (
        <Pagination onPageClick={setActivePage} activePage={activePage} pageAmount={data.length} />
      )}
    </div>
  );
};
