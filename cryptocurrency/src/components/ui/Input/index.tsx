import classes from './style.module.scss';

interface InputProps {
  attributes?: {
    placeholder?: string;
    type?: string;
  };
  value: string;
  onChange: (arg: string) => void;
  className?: string;
}

export const Input = ({ attributes, value, onChange, className }: InputProps) => {
  return (
    <input
      {...attributes}
      value={value}
      className={`${classes.input} ${className}`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
