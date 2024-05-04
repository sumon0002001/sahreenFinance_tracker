import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import "./financial-record.css";

const Dashboard = () => {
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="dashboard-container">
      <h1>{user?.firstName}!! Here You can See your Finances</h1>
      <div>Total Monthly: </div>
    </div>
  );
};
export default Dashboard;
