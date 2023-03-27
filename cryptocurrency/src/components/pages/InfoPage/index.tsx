import React from 'react';
import { useParams } from 'react-router';
import { Graph } from '../../modules/Graph';
import { Table } from '../../modules/Table';

export const InfoPage = () => {
  const { id } = useParams();
  return (
    <>
      <Table id={id} />
      <Graph id={id || ''} />
    </>
  );
};
