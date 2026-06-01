export default function ContextMenu({ x, y, onEdit, onDelete }) {
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
