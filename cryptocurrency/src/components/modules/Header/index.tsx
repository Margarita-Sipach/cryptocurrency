import React, { useEffect, useState } from 'react';
import { getAllData } from '../../../api';
import { CryptoType } from '../../../type';
import { CryptoElement } from '../../ui/CryptoElement';
import { UserPortfolio } from '../../ui/UserPortfolio';
import classes from './style.module.scss';

export const Header = ({ onPortfolioClick }: { onPortfolioClick: (arg: boolean) => void }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    getAllData(3).then((item) => setElements(item));
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.top}>
        {elements &&
          elements.map((item: CryptoType) => (
            <CryptoElement key={item.id} title={item.name} price={+item.priceUsd}></CryptoElement>
          ))}
      </div>
      <UserPortfolio onClick={onPortfolioClick} />
    </header>
  );
};
