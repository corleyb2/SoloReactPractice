import React, { useState } from "react";
import "./App.css";
import myDatabase from "./Database.js";
import ClimbCard from "./components/ClimbCard";
import ClimbDetails from "./components/ClimbDetails";

function App() {
  const [currentClimb, setCurrentClimb] = useState("");
  const [isHomePage, setIsHomePage] = useState(true);

  function updateClimb(details) {
    setCurrentClimb(details);
    setIsHomePage(false);
  }

  if (!isHomePage) {
    return (
      <ClimbDetails
        setIsHomePage={setIsHomePage}
        currentClimb={currentClimb}
      ></ClimbDetails>
    );
  }

  return (
    <div className="App">
      <header className="navbar">
        <h1>Climbing Across the USA</h1>
        <div className="navbar-links">
          <p>About This Page</p>
          <p>Contact Us</p>
        </div>
      </header>
      <div className="main-content">
        {myDatabase.map((climb) => (
          <ClimbCard climb={climb} updateClimb={updateClimb}></ClimbCard>
        ))}
      </div>
    </div>
  );
}

export default App;
