import React, { useState } from 'react';
import { getDataById } from '../../../api';
import { ContextData } from '../../../App';
import { currencyConversion } from '../../../functions';
import { ChangeType, ContextType, CryptoType, HistoryType } from '../../../type';
import { Button } from '../../ui/button/Button';
import { Input } from '../../ui/Input';
import classes from './style.module.scss';

interface FormProps {
  id: string;
}

export const Form = ({ id }: FormProps) => {
  const { setOldValue, changes, setChanges } = React.useContext<ContextType>(ContextData);
  const [inputVal, setInputVal] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onClick = () => {
    if (+inputVal > 0 && id) {
      const newChange: ChangeType = { id: id, value: +inputVal };
      const newChanges: ChangeType[] = [...changes, newChange];
      setChanges(newChanges);
      currencyConversion(setOldValue, newChanges);
      setIsSuccess(true);
    }
  };

  return (
    <form action="" className={classes.form}>
      <div className={classes.form__item}>{id}</div>
      <Input
        className={classes.form__item}
        attributes={{ placeholder: 'Write number', type: 'number', min: '0' }}
        value={inputVal}
        onChange={setInputVal}
        onFocus={() => setIsSuccess(false)}
      />
      <span>{isSuccess ? `You add ${inputVal} ${id}` : ''}</span>
      <br />
      <Button onClick={onClick} className={classes.form__item}>
        Submit
      </Button>
    </form>
  );
};
