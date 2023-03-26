import React from "react";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/Input";
import classes from "./style.module.scss";

export const Form = () => {
  return (
    <form action="" className={classes.form}>
      <Input attributes={{ placeholder: "Write number", type: "number" }} />
      <Button>Submit</Button>
    </form>
  );
};
