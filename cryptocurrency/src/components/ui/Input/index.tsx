import React from "react";
import classes from "./style.module.scss";

interface InputProps {
  attributes?: {
    placeholder?: string;
    type?: string;
  };
	value: string
	onChange: (arg: string) => void
}

export const Input = ({ attributes, value, onChange }: InputProps) => {
  return <input {...attributes} value={value} className={classes.input} onChange={(e) => onChange(e.target.value)}/>;
};
