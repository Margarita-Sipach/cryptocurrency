import classes from './style.module.scss';

interface InputProps {
  attributes?: {
    placeholder?: string;
    type?: string;
    min?: string;
  };
  value: string;
  onChange: (arg: string) => void;
  onFocus?: () => void;
  className?: string;
}

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
