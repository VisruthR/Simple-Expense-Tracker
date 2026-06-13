import Stats from "./Components/Stats";
import Chart from "./Components/Chart";
import ImportExport from "./Components/ImportExport";
import { useState } from "react";

function Balance({ totalIncome, totalExpense, formatMoney, handleSwitch }) {
  const balance = totalIncome - totalExpense;
  const isPositive = balance >= 0;

  return (
    <>
      <button
        style={{
          flex: 1,
          minHeight: "85px",
          padding: "1rem",
          backgroundColor: isPositive
            ? "rgba(156, 236, 233, 0.13)"
            : "rgba(240, 188, 215, 0.13)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)",
          cursor: "pointer",
          outline: "none",
          fontFamily: "inherit",
        }}
        onClick={handleSwitch}
      >
        <span
          style={{
            fontSize: "0.8rem",
            color: "#94a3b8",
            marginBottom: "0.3rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Current Balance
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.8 }}
          >
            <path d="M17 1l4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="M7 23l-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
        </span>
        <span
          style={{
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "#f8fafc",
            letterSpacing: "0.5px",
          }}
        >
          ${formatMoney(balance)}
        </span>
      </button>
    </>
  );
}

export default function InfoCard({
  totalIncome,
  totalExpense,
  handleTransaction,
}) {
  const [ImEx, setImEx] = useState(false);

  const formatMoney = (amount) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleSwitch = () => {
    setImEx(!ImEx);
  };

  return (
    <div className="card dark info-card-wrapper">
      <Balance
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        formatMoney={formatMoney}
        handleSwitch={handleSwitch}
      />
      {ImEx ? (
        <ImportExport handleTransaction={handleTransaction} />
      ) : (
        <Stats
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          formatMoney={formatMoney}
        />
      )}

      <Chart totalIncome={totalIncome} totalExpense={totalExpense} />
    </div>
  );
}
