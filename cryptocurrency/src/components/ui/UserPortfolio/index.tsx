import React from "react";
import classes from "./style.module.scss";

interface UserPortfolioProps {
  value: number;
  diff: number;
}

export const UserPortfolio = ({ value, diff }: UserPortfolioProps) => {
  return (
    <div className={classes.portfolio}>
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
