import React, { useState } from "react";

const FinancialRecordForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="form-container">
      <form action="">
        <div className="form-field">
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            required
            className="input"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="form-field">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            required
            className="input"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
      </form>
    </div>
  );
};

export default FinancialRecordForm;
