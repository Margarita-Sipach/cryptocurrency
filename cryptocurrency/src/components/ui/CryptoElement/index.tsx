import React from "react";
import classes from "./style.module.scss";

interface CryptoElementProps {
  title: string;
  price: number;
}

export const CryptoElement = ({ title, price }: CryptoElementProps) => {
  return (
    <div className={classes.element}>
      <span className={classes.title}>{title}</span>
      <span className={classes.price}>$ {price}</span>
    </div>
  );
};
