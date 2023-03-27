import { Button } from '../Button';
import classes from './style.module.scss';

interface AddButtonProps {
  id: string;
  onModal: (arg: boolean) => void;
  getModalId: (arg: string) => void;
}
export const AddButton = ({ id, onModal, getModalId }: AddButtonProps) => {
  return (
    <Button
      className={classes.button}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        getModalId(id);
        onModal(true);
      }}
    >
      +
    </Button>
  );
};
