import { useState } from "react";
import Header from "./Components/Header";
import LoginCard from "./Components/LoginCard";
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(""); //State for user name

  const LoginHandler = (userName) => {
    const NAME = userName.trim();
    setUser(NAME); // Update the user state
  };

  return (
    <>
      <Header />
      <LoginCard LoginHandler={LoginHandler} />
      {user && <Dashboard user={user} />}

      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          marginTop: "2rem",
          lineHeight: "1.6",
          color: "#94A3B8",
        }}
      >
        This is your own Minimalistic Expense Tracker.
      </p>
    </>
  );
}

export default App;
