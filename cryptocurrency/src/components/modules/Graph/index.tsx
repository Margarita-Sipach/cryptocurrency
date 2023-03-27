import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getHistoryById } from "../../../api";
import classes from "./style.module.scss";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

export const Graph = ({id}: {id: string}) => {
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    const date = Date.now();
    getHistoryById(setData, id, "h1", date - 86400000, date);
  }, []);

  return (
    <div className={classes.graph}>
      <Line
        data={
          data && {
            labels: data.map((item) =>
              new Date(item.date).toLocaleString("en-US", {
                hour: "2-digit",
              })
            ),
            datasets: [
              {
                label: "Price",
                data: data.map((data) => data.priceUsd),
                backgroundColor: ["rgba(75,192,192,1)"],
              },
            ],
          }
        }
      />
    </div>
  );
};
