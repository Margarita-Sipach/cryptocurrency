import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import classes from './style.module.scss';
import { Chart, registerables } from 'chart.js';
import { TimeNav } from '../TimeNav';
import { graphProperties } from '../../../data';
import { GraphPropertiesType } from '../../../type';
import { useGraphState } from '../../../hooks';
Chart.register(...registerables);

export const Graph = ({ id }: { id: string }) => {
  const [timeProperties, setTimeProperties] = useState<GraphPropertiesType>(graphProperties[0]);
  const data = useGraphState(id, timeProperties);

  return (
    <div className={classes.graph}>
      <Line
        data={
          data && {
            labels: data.map((item) =>
              new Date(item.time).toLocaleString('en-US', timeProperties.labelOptios)
            ),
            datasets: [
              {
                label: 'Price',
                data: data.map((data) => data.priceUsd),
                backgroundColor: ['rgba(75,192,192,1)'],
              },
            ],
          }
        }
      />
      <TimeNav onTimeClick={setTimeProperties} />
    </div>
  );
};
