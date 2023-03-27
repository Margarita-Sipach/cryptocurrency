import React, { useState } from "react";
import { getDataById } from "../../../api";
import { ContextData } from "../../../App";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/Input";
import classes from "./style.module.scss";

interface FormProps {
  id: string;
}

export const Form = ({ id }: FormProps) => {
  const { initValue, setInitValue, changes, setChanges } =
    React.useContext(ContextData);

  const [inputVal, setInputVal] = useState("");

  const onClick = () => {
    getDataById(id).then((item: any) => {
      if (inputVal) {
        setChanges([...changes, +inputVal]);
        setInitValue(initValue + +inputVal);
      }
    });
  };

  return (
    <form action="" className={classes.form}>
      <div>{id}</div>
      <Input
        attributes={{ placeholder: "Write number", type: "number" }}
        value={inputVal}
        onChange={setInputVal}
      />
      <Button onClick={onClick}>Submit</Button>
    </form>
  );
};
