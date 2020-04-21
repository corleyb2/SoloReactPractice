import React from "react";
import "../App.css";

const ClimbDetails = ({ setIsHomePage, currentClimb }) => {
  return (
    <>
      <div className="card">
        <img src={currentClimb.image} />
        <p>{currentClimb.name}</p>
        <p>{currentClimb.location}</p>
        <p>{currentClimb.description}</p>
      </div>
      <button onClick={() => setIsHomePage(true)}> Back to Home</button>
    </>
  );
};

export default ClimbDetails;
