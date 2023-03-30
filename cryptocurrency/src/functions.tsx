import { getDataById } from './api';

export const getStartDate = (type = 'day', amount = 1) => {
  const d = new Date();
  switch (type) {
    case 'day':
      return Date.now() - 86400000 * amount;
    case 'week':
      return Date.now() - 604800000 * amount;
    case 'month':
      return d.setMonth(d.getMonth() - amount);
    default:
      return d.setFullYear(d.getFullYear() - amount);
  }
};

export const currencyConversion = (
  hook: (arg: number) => void,
  changes: { id: string; value: number }[]
) => {
  return Promise.all(changes.map((item) => getDataById(item.id))).then((values) => {
    hook(values.reduce((acc, item, index) => acc + +item.priceUsd * changes[index].value, 0));
  });
};
