import {useState , useEffect} from "react";

import ChartCard from "./Components/ChartCard";
import DisplayCard from "./Components/DisplayCard";
import InputCard from "./Components/InputCard";
import "./index.css";

export default function Dashboard({ user }) {
  const [transactions, setTransactions] = useState(() => {
      const saved = localStorage.getItem("transactions");
      return saved ? JSON.parse(saved) : [];
    }
  );

  useEffect(() => { 
    localStorage.setItem("transactions", JSON.stringify(transactions));
   }, [transactions] );
  

  const handleTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  return (
    <div
      className="dashboard"
      style={{
        backgroundColor: "#14203B",
        color: "#F8FAFC",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        maxWidth: "1000px",
        height: "750px",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "1px",
          width: "970px",
          background: "#1c2c50",
          padding: "1rem",
          letterSpacing: "0.2rem",
        }}
      >
        Welcome, {user}!
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <DisplayCard transactions={transactions} />
        <ChartCard />
      </div>
      <InputCard onAddTransaction={handleTransaction} />
    </div>
  );
}
