import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { Header } from './components/modules/Header';
import { Modal } from './components/ui/Modal';
import { PortfolioTable } from './components/modules/PortfolioTable';
import { Loader } from './components/ui/Loading';
import { useLocaleSave } from './hooks';
import { ChangeType, ContextType } from './type';

export const ContextData = React.createContext<ContextType>({
  changes: [],
  setChanges: () => {},
  oldValue: 0,
  setOldValue: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export const App = () => {
  const [isVisiblePortfolioModal, setIsVisiblePortfolioModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [changes, setChanges, oldValue, setOldValue] = useLocaleSave();
  const [modal, setModal] = useState<HTMLDivElement | null>();

  return (
    <ContextData.Provider
      value={{ changes, setChanges, oldValue, setOldValue, isLoading, setIsLoading }}
    >
      <div className="page wrapper">
        <Header onPortfolioClick={setIsVisiblePortfolioModal} />
        <Outlet />
        {isVisiblePortfolioModal && (
          <Modal onSetModal={setModal} onOpenModal={setIsVisiblePortfolioModal}>
            <PortfolioTable />
          </Modal>
        )}
        {isLoading && <Loader />}
      </div>
    </ContextData.Provider>
  );
};
