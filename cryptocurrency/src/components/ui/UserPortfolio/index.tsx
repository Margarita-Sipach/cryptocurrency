import React from "react";
import classes from "./style.module.scss";

interface UserPortfolioProps {
  value: number;
  diff: number;
  onClick: (arg: boolean) => void;
}

export const UserPortfolio = ({ value, diff, onClick }: UserPortfolioProps) => {
  return (
    <div className={classes.portfolio} onClick={() => onClick(true)}>
      <span className={classes.title}>User Portfolio</span>
      <div>
        <span className={classes.value}>$ {value}</span>
        <span className={classes.diff}>
          +{diff} ({((diff * 100) / value).toFixed(1)} %)
        </span>
      </div>
    </div>
  );
};
