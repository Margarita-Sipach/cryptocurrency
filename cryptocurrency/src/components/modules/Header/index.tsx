import React, { useEffect, useState } from 'react';
import { getAllData } from '../../../api';
import { CryptoType } from '../../../type';
import { CryptoElement } from '../../ui/CryptoElement';
import { UserPortfolio } from '../../ui/UserPortfolio';
import classes from './style.module.scss';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { usePopularElements } from '../../../hooks';

export const Header = ({ onPortfolioClick }: { onPortfolioClick: (arg: boolean) => void }) => {
  const elements = usePopularElements();

  return (
    <header className={classes.header}>
      <div className={classes.col}>
        <Link to="/">
          <AiFillHome className={classes.home} />
        </Link>
        <div className={classes.top}>
          {elements &&
            elements.map((item: CryptoType) => (
              <CryptoElement
                className={classes.top__item}
                key={item.id}
                title={item.name}
                price={+item.priceUsd}
              ></CryptoElement>
            ))}
        </div>
      </div>

      <UserPortfolio onClick={onPortfolioClick} />
    </header>
  );
};
