import { getDataById } from './api';
import { ChangeType } from './type';

export const getStartDate = (type = 'day', amount = 1): number => {
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

export const currencyConversion = async (hook: (arg: number) => void, changes: ChangeType[]) => {
  const values = await Promise.all(changes.map((item) => getDataById(item.id)));
  hook(values.reduce((acc, item_1, index) => acc + +item_1.priceUsd * changes[index].value, 0));
};
