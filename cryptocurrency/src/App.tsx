import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/modules/Header";
import { Modal } from "./components/ui/Modal";
import { Form } from "./components/modules/Form";
import { PortfolioTable } from "./components/modules/PortfolioTable";


export const ContextData = React.createContext({
  changes: [],
  setChanges: (arg: number[]) => {},
  initValue: 0,
  setInitValue: (arg: number) => {},
});

export const App = () => {
  const [isVisiblePortfolioModal, setIsVisiblePortfolioModal] = useState(false);

  const [changes, setChanges] = useState(
    localStorage.getItem("changes")
      ? JSON.parse(localStorage.getItem("changes") as string)
      : []
  );
  const [initValue, setInitValue] = useState(
    +(localStorage.getItem("initValue") || 0)
  );

  useEffect(() => {
		
    localStorage.setItem("initValue", `${initValue}`);
    localStorage.setItem("changes", JSON.stringify(changes));
  }, [initValue, changes]);

  return (
    <ContextData.Provider
      value={{ changes, setChanges, initValue, setInitValue }}
    >
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
