export default function ChartCard({ totalIncome, totalExpense }) {
  const balance = totalIncome - totalExpense;

  const formatMoney = (amount) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div
      className="card dark"
      style={{
        width: "30vh",
        height: "35vh",
        marginTop: "2rem",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        padding: "1.2rem",
        gap: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: "0 0 30%",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <span
          style={{
            fontSize: "0.8rem",
            color: "#94a3b8",
            marginBottom: "0.3rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Current Balance
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
      </div>

      <div
        style={{
          display: "flex",
          flex: "0 0 25%",
          gap: "0.8rem",
        }}
      >
        {/* Income Block */}
        <div
          style={{
            flex: 1,
            backgroundColor: "rgba(34, 197, 194, 0.06)",
            border: "1px solid rgba(34, 197, 194, 0.15)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "#22c5c2",
              opacity: 0.8,
              marginBottom: "0.2rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Income
          </span>
          <span
            style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#22c5c2" }}
          >
            ${formatMoney(totalIncome)}
          </span>
        </div>

        {/* Expense Block */}
        <div
          style={{
            flex: 1,
            backgroundColor: "rgba(239, 68, 156, 0.06)",
            border: "1px solid rgba(239, 68, 156, 0.15)",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "#ef449c",
              opacity: 0.8,
              marginBottom: "0.2rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Expense
          </span>
          <span
            style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#ef449c" }}
          >
            ${formatMoney(totalExpense)}
          </span>
        </div>
      </div>

      {/* 3. BOTTOM: Future Chart Area */}
      <div
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.03)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#475569",
          fontSize: "0.85rem",
          boxShadow: "inset 0 4px 15px rgba(0,0,0,0.2)",
        }}
      >
        [ Visual Chart Area ]
      </div>
    </div>
  );
}
