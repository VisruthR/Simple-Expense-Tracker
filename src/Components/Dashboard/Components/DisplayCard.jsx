import { useRef, useEffect, useState } from "react";
import "../index.css";

function ContextMenu({ x, y, onEdit, onDelete }) {
  return (
    <div
      style={{
        position: "fixed",
        top: y,
        left: x,
        backgroundColor: "#021d35",
        border: "1px solid #334155",
        borderRadius: "10px",
        padding: "0.25rem",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        minWidth: "100px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <button
        onClick={onEdit}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#f8fafc",
          cursor: "pointer",
          padding: "0.5rem 1rem",
          textAlign: "left",
          borderRadius: "4px",
        }}
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#ef449c",
          cursor: "pointer",
          padding: "0.5rem 1rem",
          textAlign: "left",
          borderRadius: "4px",
        }}
      >
        Delete
      </button>
    </div>
  );
}

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

export default function DisplayCard({ transactions = [] , onDeleteTransaction }) {
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
  };

  const handleDelete = () => {
    console.log("Deleting:", contextMenu.selectedTransaction);
    onDeleteTransaction(contextMenu.selectedTransaction.id);

    setContextMenu({ ...contextMenu, visible: false });
  };

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
      <h2 style={{ margin: "0.1rem" }}>Screen</h2>
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
