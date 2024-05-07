import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import { useFinancialRecord } from "../../contexts/financial-record-context";

const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { addRecord } = useFinancialRecord();

  const { user } = useUser();

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic here

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description: description,
      amount: parseFloat(amount),
      category: category,
      paymentMethod: paymentMethod,
    };
    addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };
  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
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
        <div className="form-field">
          <label>Category: </label>
          <select
            required
            name="category"
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""> Select a Category</option>
            <option value="food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salary</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="">Payment Method</label>
          <select
            required
            name="payment-method"
            className="input"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="button">
          Add Record
        </button>
      </form>
    </div>
  );
};

export default FinancialRecordForm;
