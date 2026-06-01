export default function Stats({ totalIncome, totalExpense }) {
  const balance = totalIncome - totalExpense;
  const isPositive = balance >= 0;

  const formatMoney = (amount) => {
    return amount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      <div
        style={{
          flex: "0 0 30%",
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
    </>
  );
}