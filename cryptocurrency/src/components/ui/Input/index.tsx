import classes from './style.module.scss';
import { InputProps } from './type';

export const Input = ({ attributes, value, onChange, className, onFocus }: InputProps) => {
  return (
    <input
      {...attributes}
      value={value}
      className={`${classes.input} ${className}`}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onFocus={onFocus}
    />
  );
};
