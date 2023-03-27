import React, { useState } from 'react';
import { getDataById } from '../../../api';
import { ContextData } from '../../../App';
import { Button } from '../../ui/button/Button';
import { Input } from '../../ui/Input';
import classes from './style.module.scss';

interface FormProps {
  id: string;
}

export const Form = ({ id }: FormProps) => {
  const { setOldValue, changes, setChanges } = React.useContext(ContextData);
  const [inputVal, setInputVal] = useState('');

  const onClick = async () => {
    if (inputVal) {
      const newChanges = [...changes, { id: id, value: +inputVal }];
      await getDataById(id).then(() => {
        setChanges(newChanges);
      });

      await Promise.all(newChanges.map((item) => getDataById(item.id))).then((values) => {
        setOldValue(
          values.reduce((acc, item, index) => acc + item.priceUsd * newChanges[index].value, 0)
        );
      });
    }
  };

  return (
    <form action="" className={classes.form}>
      <div>{id}</div>
      <Input
        attributes={{ placeholder: 'Write number', type: 'number' }}
        value={inputVal}
        onChange={setInputVal}
      />
      <Button onClick={onClick}>Submit</Button>
    </form>
  );
};
