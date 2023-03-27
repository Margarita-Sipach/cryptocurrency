import React from 'react';
import classes from './style.module.scss';

interface ModalProps {
  children: React.ReactElement;
  onClick: (arg: boolean) => void;
}
export const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <div className={classes.modal} onClick={() => onClick(false)}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
