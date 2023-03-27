import React, { useEffect, useState } from "react";
import { ContextData } from "../../../App";
import classes from "./style.module.scss";

interface UserPortfolioProps {
  onClick: (arg: boolean) => void;
}

export const UserPortfolio = ({ onClick }: UserPortfolioProps) => {
  const { initValue, setInitValue, changes, setChanges } =
    React.useContext(ContextData);

  const [diffValue, setDiffValue] = useState(changes[changes.length - 1]);

  useEffect(() => {
    setDiffValue(changes[changes.length - 1]);
  }, [initValue]);

  return (
    <div className={classes.portfolio} onClick={() => onClick(true)}>
      <span className={classes.title}>User Portfolio</span>
      <div>
        <span className={classes.value}>$ {initValue}</span>
        <span className={classes.diff}>
          +{diffValue} (
          {diffValue ? ((diffValue * 100) / initValue).toFixed(2) : 0} %)
        </span>
      </div>
    </div>
  );
};
