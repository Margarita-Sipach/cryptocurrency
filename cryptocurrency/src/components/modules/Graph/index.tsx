import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getFullHistoryById, getHistoryById } from '../../../api';
import classes from './style.module.scss';
import { Chart as ChartJS, registerables } from 'chart.js';
import { TimeNav } from '../TimeNav';
import { graphProperties } from '../../../data';
import { HistoryType } from '../../../type';
import { useGraphState } from '../../../hooks';
ChartJS.register(...registerables);

export const Graph = ({ id }: { id: string }) => {
  const [timeProperties, setTimeProperties] = useState(graphProperties[0]);
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
