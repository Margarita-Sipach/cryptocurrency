import React from "react";
import { CryptoElement } from "../../ui/CryptoElement";
import { UserPortfolio } from "../../ui/UserPortfolio";
import classes from "./style.module.scss";

export const Header = ({
  onPortfolioClick,
}: {
  onPortfolioClick: (arg: boolean) => void;
}) => {
  return (
    <header className={classes.header}>
      <div className={classes.top}>
        <CryptoElement title={"ffffff"} price={0}></CryptoElement>
        <CryptoElement title={"ffffff"} price={0}></CryptoElement>
        <CryptoElement title={"ffffff"} price={0}></CryptoElement>
      </div>
      <UserPortfolio value={134.32} diff={2.38} onClick={onPortfolioClick} />
    </header>
  );
};
