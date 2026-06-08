export default function Header() {
  return (
    <header style={{ padding: "0 1rem" }}>
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "bold",
        }}
      >
        Expense{" "}
        <span
          style={{
            color: "#29bbf0",
          }}
        >
          Tracker
        </span>
      </h1>
    </header>
  );
}
