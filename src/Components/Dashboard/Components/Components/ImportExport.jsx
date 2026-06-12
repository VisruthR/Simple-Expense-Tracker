function Import() {
  return (
    <button
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
        cursor: "pointer",
        outline: "none",
        fontFamily: "inherit",
      }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          color: "#22c5c2",
          letterSpacing: "0.5px",
          marginBottom: "0.2rem",
          textTransform: "uppercase",
        }}
      >
        Import
      </span>
      <span
        style={{
          fontSize: "0.7rem",
          color: "#22c5c2",
          opacity: 0.8,
        }}
      >
        You can import your finace here
      </span>
    </button>
  );
}

function Export() {
  return (
    <button
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
        cursor: "pointer",
        outline: "none",
        fontFamily: "inherit",
      }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          color: "#ef449c",
          letterSpacing: "0.5px",
          marginBottom: "0.2rem",
          textTransform: "uppercase",
        }}
      >
        Export
      </span>
      <span style={{ fontSize: "0.7rem", color: "#ef449c", opacity: 0.8 }}>
        You can export your finace here
      </span>
    </button>
  );
}

export default function ImEx() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        gap: "0.8rem",
        minHeight: "85px",
      }}
    >
      <Import />
      <Export />
    </div>
  );
}
