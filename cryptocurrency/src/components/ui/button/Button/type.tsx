export interface ButtonProps {
  type?: string;
  id?: string;
  children?: string | number;
  onClick?: (e: React.MouseEvent, id?: string) => void;
  className?: string;
}
