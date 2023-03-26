import React, { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/modules/Header";
import { Modal } from "./components/ui/Modal";
import { Form } from "./components/modules/Form";
import { Button } from "./components/ui/button/Button";
import { PortfolioTable } from "./components/modules/PortfolioTable";

export const ContextData = React.createContext({
  isVisibleAddModal: false,
  setIsVisibleAddModal: (arg: boolean) => {},
});

export const App = () => {
  const [isVisibleAddModal, setIsVisibleAddModal] = useState(false);
  const [isVisiblePortfolioModal, setIsVisiblePortfolioModal] = useState(false);

  return (
    <ContextData.Provider value={{ isVisibleAddModal, setIsVisibleAddModal }}>
      <div className="page wrapper">
        <Header onPortfolioClick={setIsVisiblePortfolioModal} />
        <Outlet />
        {isVisiblePortfolioModal && (
          <Modal onClick={setIsVisiblePortfolioModal}>
            <div>dddd</div>
          </Modal>
        )}
        {isVisibleAddModal && (
          <Modal onClick={setIsVisibleAddModal}>
            <div>ddd</div>
          </Modal>
        )}
      </div>
    </ContextData.Provider>
  );
};
