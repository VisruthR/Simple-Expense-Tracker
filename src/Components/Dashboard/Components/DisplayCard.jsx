import { useRef, useEffect, useState } from "react";
import ContextMenu from "./Components/ContextMenu";
import "../index.css";

function Attribute({ data, onContextMenu }) {
  const isIncome = data.type === "income";

  return (
    <div
      className="transaction-attribute"
      onContextMenu={(e) => onContextMenu(e, data)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        padding: "1rem 1.2rem",
        borderRadius: "8px",
        margin: "0.8rem 1rem",
        color: "#f8fafc",
        textAlign: "left",
        cursor: "context-menu",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="attr-title" style={{ fontWeight: "600" }}>
          {data.purpose || data.source}
        </span>
        <span
          className="attr-amount"
          style={{
            fontWeight: "bold",
            color: isIncome ? "#22c5c2" : "#ef449c",
          }}
        >
          {isIncome ? "+" : "-"}${parseFloat(data.amount)}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.2rem",
        }}
      >
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

export default function DisplayCard({
  transactions = [],
  onDeleteTransaction,
}) {
  const bottomOfDisplayRef = useRef(null);
  const PreveLengthRef = useRef(transactions.length);

  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    selectedTransaction: null,
  });

  useEffect(() => {
    if (transactions.length > PreveLengthRef.current) {
      if (bottomOfDisplayRef.current) {
        bottomOfDisplayRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    PreveLengthRef.current = transactions.length;
  }, [transactions]);

  // 2. Global listener to close the menu if you click away
  useEffect(() => {
    const handleClickAway = () => {
      if (contextMenu.visible) {
        setContextMenu({ ...contextMenu, visible: false });
      }
    };
    window.addEventListener("click", handleClickAway);
    return () => window.removeEventListener("click", handleClickAway);
  }, [contextMenu]);

  const handleContextMenu = (e, transaction) => {
    e.preventDefault();
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      selectedTransaction: transaction,
    });
  };

  const handleEdit = () => {
    console.log("Editing:", contextMenu.selectedTransaction);
    alert("Edit functionality will be implemented soon.");
  };

  const handleDelete = () => {
    console.log("Deleting:", contextMenu.selectedTransaction);
    onDeleteTransaction(contextMenu.selectedTransaction.id);

    setContextMenu({ ...contextMenu, visible: false });
  };

  return (
    <div className="card dark display-card-wrapper">
      <h2 style={{ margin: "0.5rem", marginTop: "1rem" }}>Screen</h2>
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
            <Attribute
              key={transaction.id}
              data={transaction}
              onContextMenu={handleContextMenu}
            />
          ))
        )}
        <div ref={bottomOfDisplayRef} />
      </div>

      {contextMenu.visible && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}
