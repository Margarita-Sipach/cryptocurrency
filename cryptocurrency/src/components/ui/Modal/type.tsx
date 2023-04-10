export interface ModalProps {
  children: React.ReactElement;
  onOpenModal: (arg: boolean) => void;
}

export interface ModalTemplateProps {
  isOpenModal: boolean;
  children: string;
}
