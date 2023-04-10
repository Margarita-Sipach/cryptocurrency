export interface InputProps {
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

export interface InputTemplateProps {
  placeholder?: string;
  type?: string;
  min?: string;
  value: string;
  onChange: (arg: string) => void;
  onFocus?: () => void;
  className?: string;
}
