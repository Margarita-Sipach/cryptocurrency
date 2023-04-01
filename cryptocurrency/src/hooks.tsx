import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAllData, getDataById, getFullHistoryById, getHistoryById } from './api';
import { ContextData } from './App';
import { graphProperties } from './data';
import { currencyConversion } from './functions';
import { ChangeType, ContextType, CryptoType, GraphPropertiesType, HistoryType } from './type';

export const useTableState = (id: string, activePage: number): CryptoType[] | CryptoType => {
  const { setIsLoading } = React.useContext<ContextType>(ContextData);

  const [data, setData] = useState<CryptoType[] | CryptoType>([]);
  useEffect(() => {
    try {
      setIsLoading(true);
      (id ? getDataById(id) : getAllData(10, activePage * 10 - 10)).then((item) => {
        setData(item);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [activePage, id, setIsLoading]);
  return data;
};

export const useGraphState = (id: string, timeProperties: GraphPropertiesType): HistoryType[] => {
  const [data, setData] = useState<HistoryType[]>([]);
  useEffect(() => {
    (timeProperties.start
      ? getHistoryById(id, timeProperties.interval, timeProperties.start, Date.now())
      : getFullHistoryById(id, timeProperties.interval)
    ).then((item) => setData(item));
  }, [id, timeProperties]);
  return data;
};

export const usePopularElements = (): CryptoType[] => {
  const [elements, setElements] = useState<CryptoType[]>([]);
  useEffect(() => {
    getAllData(3).then((item) => setElements(item));
  }, []);
  return elements;
};

export const useUserPortfolio = (): [number, number] => {
  const { oldValue, changes, setIsLoading } = React.useContext<ContextType>(ContextData);
  const [newValue, setNewValue] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    if (changes && changes.length > 0) {
      try {
        currencyConversion(setNewValue, changes);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      setNewValue(0);
      setIsLoading(false);
    }
  }, [changes, newValue, oldValue, setIsLoading]);

  return [oldValue, newValue];
};

export const useLocaleSave = (): [
  ChangeType[],
  (arg: ChangeType[]) => void,
  number,
  (arg: number) => void
] => {
  const [changes, setChanges] = useState<ChangeType[]>(
    JSON.parse(localStorage.getItem('changes') || '[]')
  );
  const [oldValue, setOldValue] = useState<number>(+(localStorage.getItem('oldValue') || 0));
  useEffect(() => {
    localStorage.setItem('oldValue', `${oldValue}`);
    localStorage.setItem('changes', JSON.stringify(changes));
  }, [oldValue, changes]);
  return [changes, setChanges, oldValue, setOldValue];
};
