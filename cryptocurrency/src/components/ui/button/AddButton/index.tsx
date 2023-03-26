import React, { useContext } from "react";
import { ContextData } from "../../../../App";
import classes from "./style.module.scss";

interface AddButtonProps {
  onClick: () => void;
}
export const AddButton = () => {
	const {isVisibleAddModal, setIsVisibleAddModal} = React.useContext(ContextData);
	return <button className={classes.button} onClick={() => {setIsVisibleAddModal(true); console.log(isVisibleAddModal)}}>+</button>;
};
