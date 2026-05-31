import { useState } from "react";
import "./index.css";

export default function LoginCard({ LoginHandler }) {
  const [name, setName] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const localSubmitHandler = (e) => {
    e.preventDefault();

    if (name.trim() !== "") {
      setsubmitted(true);

      setTimeout(() => {
        LoginHandler(name);
      }, 950);
    }
  };

  return (
    <div
      className={`Login-Div ${submitted ? "fade-out" : ""}`}
      style={{
        backgroundColor: "#14203B",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        width: "300px",
        margin: "10rem auto 2rem auto",
        transition: "opacity 0.5s ease-out",
      }}
    >
      <form onSubmit={localSubmitHandler}>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              color: "#F8FAFC",
              textAlign: "left",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "0.75rem",
              borderRadius: "4px",
              border: "1px solid #94A3B8",
              backgroundColor: "#0A1128",
              color: "#F8FAFC",
              outline: "none",
            }}
          />
        </div>
        <button
          type="submit"
          className="Button"
          style={{
            padding: "0.75rem",
            borderRadius: "4px",
            border: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
