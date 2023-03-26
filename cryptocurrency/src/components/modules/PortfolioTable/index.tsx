import React from "react";
import { Button } from "../../ui/button/Button";
import classes from "./style.module.scss";

const data = ["name", "name1", "name2"];

export const PortfolioTable = () => {
  return (
    <div className={classes.table}>
      {data.map((item) => (
        <div className={classes.row}>
          <div className={classes.ceil}>{item}</div>
          <div className={`${classes.ceil} ${classes.del}`}>delete</div>
        </div>
      ))}
    </div>
  );
};
