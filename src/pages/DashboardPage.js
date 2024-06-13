import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import NewDebt from "../components/NewDebt";
import Payment from "../components/Payment";
import UpdateDebt from "../components/UpdateDebt";
import DebtList from "../components/DebtList";

const DashboardPage = () => {
  const [showNewDebt, setShowNewDebt] = useState(false);

  const handleShowNewDebt = () => {
    setShowNewDebt(true);
  };

  const [showUpdateDebt, setShowUpdateDebt] = useState(false)

  const handleShowUpdateDebt = () =>{
    setShowUpdateDebt(true)
  }

  const [showpayment, setShowpayment] = useState(false)

  const handleShowpayment = () =>{
    setShowpayment(true)
  }

  return (
    <div className="container-fluid d-flex flex-row">
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <Dashboard />
        <DebtList 
        onShowNewDebt={handleShowNewDebt} 
        onShowUpdateDebt={handleShowUpdateDebt}
        onShowPayment={handleShowpayment}/>
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        {showNewDebt && <NewDebt />}
        {showUpdateDebt && <UpdateDebt /> }
        {showpayment && <Payment /> }
       
      </div>
    </div>
  );
};

export default DashboardPage;
