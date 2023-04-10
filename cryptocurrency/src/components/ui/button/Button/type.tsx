export interface ButtonProps {
  children: string | number;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
