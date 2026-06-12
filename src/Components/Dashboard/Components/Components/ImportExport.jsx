function Import({ handleImport }) {
  return (
    <button
      className="glass-btn"
      onClick={handleImport}
      style={{
        flex: 1,
        padding: "0.5rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: "none",
        fontFamily: "inherit",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          color: "#cbd5e1",
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
          color: "#94a3b8",
        }}
      >
        Load data
      </span>
    </button>
  );
}

function Export({ handleExport }) {
  return (
    <button
      className="glass-btn"
      onClick={handleExport}
      style={{
        flex: 1,
        padding: "0.5rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: "none",
        fontFamily: "inherit",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          color: "#cbd5e1",
          letterSpacing: "0.5px",
          marginBottom: "0.2rem",
          textTransform: "uppercase",
        }}
      >
        Export
      </span>
      <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Save data</span>
    </button>
  );
}

export default function ImEx() {
  const handleImport = () => {
    alert("Import functionality will be implemented soon.");
  };

  const handleExport = () => {
    alert("Export functionality will be implemented soon.");
  };

  return (
    <div
      className="animate-enter"
      style={{
        display: "flex",
        flex: 1,
        gap: "0.8rem",
        minHeight: "85px",
      }}
    >
      <Import handleImport={handleImport} />
      <Export handleExport={handleExport} />
    </div>
  );
}
