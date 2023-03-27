import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Header } from './components/modules/Header';
import { Modal } from './components/ui/Modal';
import { PortfolioTable } from './components/modules/PortfolioTable';

export const ContextData = React.createContext({
  changes: [] as Array<{ id: string; value: number; date: number }>,
  setChanges: (arg: object[]) => {},
  oldValue: 0,
  setOldValue: (arg: number) => {},
});

export const App = () => {
  const [isVisiblePortfolioModal, setIsVisiblePortfolioModal] = useState(false);

  const [changes, setChanges] = useState(
    localStorage.getItem('changes') ? JSON.parse(localStorage.getItem('changes') as string) : []
  );
  const [oldValue, setOldValue] = useState(+(localStorage.getItem('oldValue') || 0));

  useEffect(() => {
    localStorage.setItem('oldValue', `${oldValue}`);
    localStorage.setItem('changes', JSON.stringify(changes));
  }, [oldValue, changes]);

  return (
    <ContextData.Provider value={{ changes, setChanges, oldValue, setOldValue }}>
      <div className="page wrapper">
        <Header onPortfolioClick={setIsVisiblePortfolioModal} />
        <Outlet />
        {isVisiblePortfolioModal && (
          <Modal onClick={setIsVisiblePortfolioModal}>
            <PortfolioTable />
          </Modal>
        )}
      </div>
    </ContextData.Provider>
  );
};
