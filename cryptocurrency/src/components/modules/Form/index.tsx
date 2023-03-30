import React, { useState } from 'react';
import { getDataById } from '../../../api';
import { ContextData } from '../../../App';
import { currencyConversion } from '../../../functions';
import { CryptoType, HistoryType } from '../../../type';
import { Button } from '../../ui/button/Button';
import { Input } from '../../ui/Input';
import classes from './style.module.scss';

interface FormProps {
  id: string;
}

export const Form = ({ id }: FormProps) => {
  const { setOldValue, changes, setChanges } = React.useContext(ContextData);
  const [inputVal, setInputVal] = useState('');

  const onClick = () => {
    if (inputVal) {
      const newChanges = [...changes, { id: id, value: +inputVal }];
      setChanges(newChanges);
      currencyConversion(setOldValue, newChanges);
    }
  };

  return (
    <form action="" className={classes.form}>
      <div className={classes.form__item}>{id}</div>
      <Input
        className={classes.form__item}
        attributes={{ placeholder: 'Write number', type: 'number' }}
        value={inputVal}
        onChange={setInputVal}
      />
      <Button onClick={onClick} className={classes.form__item}>
        Submit
      </Button>
    </form>
  );
};
