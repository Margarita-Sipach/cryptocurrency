import classes from './style.module.scss';
import { Button } from '../../ui/button/Button';
import { graphProperties } from '../../../data';
import { GraphPropertiesType } from '../../../type';
import { useState } from 'react';

interface TimeNavProps {
  onTimeClick: (arg: GraphPropertiesType) => void;
}

export const TimeNav = ({ onTimeClick }: TimeNavProps) => {
  const [activeTime, setActiveTime] = useState(0);
  return (
    <div className={classes.pagination}>
      {graphProperties.map((item, index) => (
        <Button
          key={item.title}
          className={`${classes.pagination__item} ${
            activeTime === index && classes.pagination__item_active
          }`}
          onClick={(e: React.MouseEvent) => {
            setActiveTime(index);
            onTimeClick(graphProperties[index]);
          }}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};
