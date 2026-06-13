import { useState, useEffect } from "react";

import InfoCard from "./Components/InfoCard";
import DisplayCard from "./Components/DisplayCard";
import InputCard from "./Components/InputCard";
import "./index.css";

export default function Dashboard({ user }) {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    console.log(transactions);
  }, [transactions]);

  const totalIncome = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + parseFloat(item.amount), 0);

  const totalExpense = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + parseFloat(item.amount), 0);

  const handleTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id),
    );
  };

  return (
    <div className="dashboard dashboard-container">
      <h2 className="dashboard-header">Welcome, {user}!</h2>
      <div className="dashboard-top-row">
        <DisplayCard
          transactions={transactions}
          onDeleteTransaction={deleteTransaction}
        />
        <InfoCard totalIncome={totalIncome} totalExpense={totalExpense} />
      </div>
      <InputCard onAddTransaction={handleTransaction} />
    </div>
  );
}
