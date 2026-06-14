import { useRef } from "react";

function Import({ handleImport }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const parsedData = JSON.parse(event.target.result);

        if (Array.isArray(parsedData)) {
          handleImport(parsedData);
        } else {
          alert("Invalid file format: Expected an array of transactions.");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        alert("Failed to read the file. Please ensure it is valid JSON.");
      }

      e.target.value = null;
    };

    reader.readAsText(file);
  };

  return (
    <>
      <input
        type="file"
        accept=".json"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <button
        className="glass-btn"
        onClick={handleButtonClick}
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
    </>
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

export default function DashboardExportImport({ handleTransaction }) {
  const handleImport = (importedData) => {
    importedData.forEach((item) => {
      handleTransaction({
        ...item,
        id: crypto.randomUUID(),
      });
    });
  };

  const handleExport = () => {
    const dataStr = localStorage.getItem("transactions") || "[]";

    const blob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "my_transactions.json";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
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
