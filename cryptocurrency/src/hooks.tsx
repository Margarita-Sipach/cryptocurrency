import React, { useState } from 'react';
import { useEffect } from 'react';
import { getAllData, getDataById, getFullHistoryById, getHistoryById } from './api';
import { ContextData } from './App';
import { graphProperties } from './data';
import { currencyConversion } from './functions';
import { CryptoType, GraphPropertiesType, HistoryType } from './type';

export const useTableState = (id: string, activePage: number) => {
  const { setIsLoading } = React.useContext(ContextData);

  const [data, setData] = useState([] as CryptoType[] | CryptoType);
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

export const useGraphState = (id: string, timeProperties: GraphPropertiesType) => {
  const [data, setData] = useState([] as HistoryType[]);
  useEffect(() => {
    (timeProperties.start
      ? getHistoryById(id, timeProperties.interval, timeProperties.start, Date.now())
      : getFullHistoryById(id, timeProperties.interval)
    ).then((item) => setData(item));
  }, [id, timeProperties]);
  return data;
};

export const usePopularElements = () => {
  const [elements, setElements] = useState([] as CryptoType[]);
  useEffect(() => {
    getAllData(3).then((item) => setElements(item));
  }, []);
  return elements;
};

export const useUserPortfolio = () => {
  const { oldValue, changes, setIsLoading } = React.useContext(ContextData);
  const [newValue, setNewValue] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    if (changes.length > 0) {
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

export const useLocaleSave = () => {
  const [changes, setChanges] = useState(
    localStorage.getItem('changes') ? JSON.parse(localStorage.getItem('changes') as string) : []
  );
  const [oldValue, setOldValue] = useState(+(localStorage.getItem('oldValue') || 0));
  useEffect(() => {
    localStorage.setItem('oldValue', `${oldValue}`);
    localStorage.setItem('changes', JSON.stringify(changes));
  }, [oldValue, changes]);
  return [changes, setChanges, oldValue, setOldValue];
};
