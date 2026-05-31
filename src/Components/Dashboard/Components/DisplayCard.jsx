import "../index.css";

function Attribute( {data} ) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        padding: "1.2rem",
        borderRadius: "25px",
        margin: "1rem",
        marginBottom: "2rem",
        scrollSnapMarginBottom: "1rem",
        color: "white",
        textAlign: "left",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <span>{data.purpose || data.source}</span>
        <span>${data.amount}</span>
      </div>

      <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>
        <span>{data.category || data.date}</span>
        {data.description && (
          <p style={{ margin: "0.5rem 0 0 0" }}>{data.description}</p>
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
