export default function Stats({ totalIncome, totalExpense, formatMoney }) {
  return (
    <>
      <div
        className="animate-enter"
        style={{
          display: "flex",
          flex: 1,
          gap: "0.8rem",
          minHeight: "85px",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "0.5rem",
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
            padding: "0.5rem",
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
