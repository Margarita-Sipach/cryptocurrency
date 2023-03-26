import React, { useState } from "react";
import classes from "./style.module.scss";
import { Link } from "react-router-dom";
import { Modal } from "../../ui/Modal";
import { AddButton } from "../../ui/button/AddButton";

const tableHeader = [
  "Rank",
  "Name",
  "Price",
  "Market Cap",
  "VWAP (24Hr)",
  "MAX Supply",
  "Supply",
  "Volume (24Hr)",
  "Change (24Hr)",
  "Add",
];

const data = [
  [
    "1",
    "$200FF00",
    "$200VFD00",
    "$G",
    "$20F000",
    "$2FVD0000",
    "$2VF0000",
    "$2VD0000",
    "$2FV0000",
  ],
  [
    "1",
    "$200x00",
    "$20A0E00",
    "$20F000",
    "$2D0000",
    "$200E00",
    "$20E0V00",
    "$2DS0000",
    "$20E00B0",
  ],
];

export const Table = () => {
  return (
    <div className={classes.table}>
      <div className={`${classes.row} ${classes.header}`}>
        {tableHeader.map((item) => (
          <div key={item} className={classes.ceil}>
            {item}
          </div>
        ))}
      </div>

      {data.map((row) => (
        <Link key={row} className={classes.row} to={""}>
          {row.map((ceil) => (
            <div key={ceil} className={classes.ceil}>
              {ceil}
            </div>
          ))}
          <div className={classes.ceil}>
            <AddButton />
          </div>
        </Link>
      ))}
    </div>
  );
};
