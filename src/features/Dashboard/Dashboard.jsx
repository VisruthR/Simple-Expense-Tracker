import { useState, useEffect } from "react";

import InfoCard from "../Cards/InfoCard";
import DisplayCard from "./Components/DisplayCard";
import InputCard from "./Components/InputCard";
import "./index.css";

export default function Dashboard({ user }) {
  const [editingTransaction, setEditingTransaction] = useState(null);

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
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

  const editTransaction = (updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction,
      ),
    );
    setEditingTransaction(null);
  };

  const handleSubmitTransaction = (transactionData) => {
    if (editingTransaction) {
      editTransaction(transactionData);
    } else {
      handleTransaction(transactionData);
    }
  };

  return (
    <div className="dashboard dashboard-container">
      <h2 className="dashboard-header">Welcome, {user}!</h2>
      <div className="dashboard-top-row">
        <DisplayCard
          transactions={transactions}
          onDeleteTransaction={deleteTransaction}
          onEditStart={setEditingTransaction}
        />
        <InfoCard
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          handleTransaction={handleTransaction}
        />
      </div>
      <InputCard
        key={editingTransaction ? editingTransaction.id : "new-transaction"}
        onAddTransaction={handleSubmitTransaction}
        editingTransaction={editingTransaction}
      />
    </div>
  );
}
