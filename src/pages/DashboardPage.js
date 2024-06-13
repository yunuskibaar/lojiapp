import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import NewDebt from "../components/NewDebt";
import Payment from "../components/Payment";
import UpdateDebt from "../components/UpdateDebt";
import DebtList from "../components/DebtList";

const DashboardPage = () => {
  const [showNewDebt, setShowNewDebt] = useState(false);
  const [debts, setDebts] = useState([]);
  const [showUpdateDebt, setShowUpdateDebt] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const handleShowNewDebt = () => {
    setShowNewDebt(true);
  };

  const handleShowUpdateDebt = () => {
    setShowUpdateDebt(true);
  };

  const handleShowPayment = () => {
    setShowPayment(true);
  };

  const handleNewDebtSubmit = (newDebt) => {
    setDebts([...debts, newDebt]);
    setShowNewDebt(false);
  };

  return (
    <div className="container-fluid d-flex flex-row">
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <Dashboard />
        <DebtList 
          debts={debts}
          onShowNewDebt={handleShowNewDebt} 
          onShowUpdateDebt={handleShowUpdateDebt}
          onShowPayment={handleShowPayment}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        {showNewDebt && <NewDebt onSubmit={handleNewDebtSubmit} />}
        {showUpdateDebt && <UpdateDebt />}
        {showPayment && <Payment />}
      </div>
    </div>
  );
};

export default DashboardPage;
