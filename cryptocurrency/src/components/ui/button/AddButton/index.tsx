import { Button } from '../Button';
import classes from './style.module.scss';
import { AddButtonProps } from './type';

export const AddButton = ({ id, onVisibleModal, onGetModalId }: AddButtonProps) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onGetModalId(id);
    onVisibleModal(true);
  };

  return (
    <Button
      className={classes.button}
      onClick={(e: React.MouseEvent) => handleButtonClick(e)}
      data-cy="add-button"
    >
      +
    </Button>
  );
};
