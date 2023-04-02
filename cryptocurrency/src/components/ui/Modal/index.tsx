import React, { useEffect, useRef } from 'react';
import classes from './style.module.scss';

interface ModalProps {
  children: React.ReactElement;
  onOpenModal: (arg: boolean) => void;
}
export const Modal = ({ children, onOpenModal }: ModalProps) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    innerRef.current && innerRef.current.focus();
  }, [innerRef]);

  return (
    <div className={classes.modal} onClick={() => onOpenModal(false)}>
      <div
        className={classes.content}
        onClick={(e) => e.stopPropagation()}
        ref={innerRef}
        tabIndex={0}
        onKeyDown={(e) => e.code === 'Escape' && onOpenModal(false)}
      >
        {children}
      </div>
    </div>
  );
};
