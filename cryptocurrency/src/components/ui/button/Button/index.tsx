import React from "react";
import classes from "./style.module.scss";

interface ButtonProps{
	children: string
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={classes.button}>{children}</button>;
};
