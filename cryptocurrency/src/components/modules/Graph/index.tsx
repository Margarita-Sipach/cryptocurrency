import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getFullHistoryById, getHistoryById } from '../../../api';
import classes from './style.module.scss';
import { Chart as ChartJS, registerables } from 'chart.js';
import { TimeNav } from '../TimeNav';
import { graphProperties } from '../../../data';
ChartJS.register(...registerables);

export const Graph = ({ id }: { id: string }) => {
  const [data, setData] = useState([] as Array<{ date: string; priceUsd: string }>);
  const [timeProperties, setTimeProperties] = useState(graphProperties[0]);

  useEffect(() => {
    (timeProperties.start
      ? getHistoryById(id, timeProperties.interval, timeProperties.start, Date.now())
      : getFullHistoryById(id, timeProperties.interval)
    ).then((item) => setData(item));
  }, [id, timeProperties]);

  return (
    <div className={classes.graph}>
      <Line
        data={
          data && {
            labels: data.map((item) =>
              new Date(item.date).toLocaleString('en-US', timeProperties.labelOptios)
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
