import { getStartDate } from './functions';
import { GraphPropertiesType } from './type';

export const graphProperties: GraphPropertiesType[] = [
  {
    title: '1D',
    labelOptios: {
      hour: '2-digit',
    },
    interval: 'h1',
    start: getStartDate(),
  },
  {
    title: '1W',
    labelOptios: {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
    },
    interval: 'h6',
    start: getStartDate('week'),
  },
  {
    title: '1M',
    labelOptios: {
      day: '2-digit',
      month: 'short',
    },
    interval: 'd1',
    start: getStartDate('month'),
  },
  {
    title: '3M',
    labelOptios: {
      day: '2-digit',
      month: 'short',
    },
    interval: 'd1',
    start: getStartDate('month', 3),
  },
  {
    title: '6M',
    labelOptios: {
      day: '2-digit',
      month: 'short',
    },
    interval: 'd1',
    start: getStartDate('month', 6),
  },
  {
    title: '1Y',
    labelOptios: {
      day: '2-digit',
      month: 'short',
    },
    interval: 'd1',
    start: getStartDate('year'),
  },
  {
    title: 'ALL',
    labelOptios: {
      day: '2-digit',
      month: 'short',
    },
    interval: 'd1',
    start: 0,
  },
];

export const tableHeader = [
  'Rank',
  'Name',
  'Price',
  'Market Cap',
  'VWAP (24Hr)',
  'MAX Supply',
  'Supply',
  'Volume (24Hr)',
  'Change (24Hr)',
  'Add',
];
