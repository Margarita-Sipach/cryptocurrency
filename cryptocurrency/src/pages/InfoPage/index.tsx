import { useParams } from 'react-router';
import { Graph } from '../../components/modules/Graph';
import { Table } from '../../components/modules/Table';

export const InfoPage = () => {
  const { id } = useParams<string>();
  return (
    <>
      <Table id={id} />
      <Graph id={id || ''} />
    </>
  );
};
