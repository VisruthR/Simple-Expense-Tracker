import "../index.css";

function Attribute({ data }) {
  const isIncome = data.type === "income"; 

  return (
    <div
      className="transaction-attribute"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        padding: "1rem 1.2rem",
        borderRadius: "8px", 
        margin: "0.8rem 1rem",
        color: "#f8fafc",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Added classes, removed inline fontSize */}
        <span className="attr-title" style={{ fontWeight: "600" }}>
          {data.purpose || data.source}
        </span>
        <span className="attr-amount" style={{
          fontWeight: "bold",
          color: isIncome ? "#22c5c2" : "#ef449c",
        }}>
          { isIncome ? "+" : "-" }${data.amount}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.2rem",
        }}
      >
        {/* Added classes, removed inline fontSize */}
        <span className="attr-category" style={{ color: "#94a3b8" }}>
          {data.category || data.date}
        </span>

        {data.description && (
          <p
            className="attr-desc"
            style={{ margin: "0.2rem 0 0 0", color: "#cbd5e1" }}
          >
            {data.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function DisplayCard( { transactions = [] } ) {
  return (
    <div
      className="card dark"
      style={{
        width: "64vh",
        height: "35vh",
        marginTop: "2rem",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ margin: "1rem" }}>Screen</h2>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255, 255, 255, 0.2) transparent",
          marginTop: "0",
        }}
      >
        {transactions.length === 0 ? (
          <p style={{ marginTop: "2rem", opacity: 0.5 }}>
            No transactions yet.
          </p>
        ) : (
          transactions.map((transaction) => (
            <Attribute key={transaction.id} data={transaction} />
          ))
        )}
      </div>
    </div>
  );
}
