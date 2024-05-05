import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import "./financial-record.css";
import FinancialRecordForm from "./financial-record-form";
import FinancialRecordList from "./financial-record-list";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="dashboard-container">
      <h1>{user?.firstName}!! Here You can See your Finances</h1>
      <FinancialRecordForm />
      <div>Total Monthly: </div>
      <FinancialRecordList />
    </div>
  );
};
export default Dashboard;
