import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getHistoryById } from '../../../api';
import classes from './style.module.scss';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

export const Graph = ({ id }: { id: string }) => {
  const [data, setData] = useState([] as Array<{ date: string; priceUsd: string }>);

  useEffect(() => {
    const date = Date.now();
    getHistoryById(id, 'h1', date - 86400000, date).then((item) => setData(item));
  }, [id]);

  return (
    <div className={classes.graph}>
      <Line
        className=""
        data={
          data && {
            labels: data.map((item) =>
              new Date(item.date).toLocaleString('en-US', {
                hour: '2-digit',
              })
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
    </div>
  );
};
