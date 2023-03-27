import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Graph } from "../../modules/Graph";
import { Table } from "../../modules/Table";
import classes from "./style.module.scss";

export const InfoPage = () => {
  const { id } = useParams();
  return (
    <>
      <Table id={id} />
      <Graph id={id || ""} />
    </>
  );
};
