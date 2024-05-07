import React, { createContext, useContext, useState } from "react";

interface FinancialRecord {
  _id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinancialRecordsContextType {
  // add your context properties here
  records: FinancialRecord[];
  addRecord: (record: FinancialRecord) => void;
  // deleteRecord: (id: string) => void;
  // updateRecord: (id: string, newRecord: FinancialRecord) => void;
}

export const FinancialRecordContext = createContext<
  FinancialRecordsContextType | undefined
>(undefined);

export const FinancialRecordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);

  const addRecord = async (record: FinancialRecord) => {
    const response = await fetch("http://localhost:3001/financial-records", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (err) {}
  };
  return (
    <FinancialRecordContext.Provider value={{ records, addRecord }}>
      {children}
    </FinancialRecordContext.Provider>
  );
};

export const useFinancialRecord = () => {
  const context = useContext<FinancialRecordsContextType | undefined>(
    FinancialRecordContext
  );
  if (!context) {
    throw new Error(
      "useFinancialRecord must be used within a FinancialRecordProvider"
    );
  }

  return context;
};
