import { useState, useEffect } from "react";
import Header from "./Components/Header";
import LoginCard from "./Components/LoginCard";
import Dashboard from "./Components/Dashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(() => {
    const savedName = localStorage.getItem("username");
    return savedName ? savedName : "";
  }); //State for user name

  useEffect(() => {
    localStorage.setItem("username", user);
  }, [user]);

  const LoginHandler = (userName) => {
    const NAME = userName.trim();
    setUser(NAME); // Update the user state
  };

  return (
    <>
      <Header />
      {!user && <LoginCard LoginHandler={LoginHandler} />}
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
