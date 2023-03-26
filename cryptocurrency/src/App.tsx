import React, { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/modules/Header";
import { Modal } from "./components/ui/Modal";
import { Form } from "./components/modules/Form";
import { Button } from "./components/ui/button/Button";
import { PortfolioTable } from "./components/modules/PortfolioTable";

export const App = () => {
  return (
    <div className="page wrapper">
      <Header />
      <Outlet />
    </div>
  );
};
