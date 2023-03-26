import React from "react";
import classes from "./style.module.scss";

interface InputProps {
  attributes?: {
    placeholder?: string;
    type?: string;
  };
}

export const Input = ({attributes}: InputProps) => {
  return <input {...attributes} className={classes.input} />;
};
