import React, { useContext } from "react";
import { ContextData } from "../../../../App";
import classes from "./style.module.scss";

interface AddButtonProps {
  id: string;
  onModal: (arg: boolean) => void;
  getModalId: (arg: string) => void;
}
export const AddButton = ({ id, onModal, getModalId }: AddButtonProps) => {
  return (
    <button
      className={classes.button}
      onClick={(e) => {
        getModalId(id);
        e.preventDefault();
        e.stopPropagation();
        onModal(true);
      }}
    >
      +
    </button>
  );
};
