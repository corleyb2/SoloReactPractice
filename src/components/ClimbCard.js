import React from "react";
import "../App.css";

const ClimbCard = ({ climb, updateClimb }) => {
  return (
    <div className="card" onClick={() => updateClimb(climb)}>
      <h3>{climb.name}</h3>
      <img src={climb.image} width="300px" alt="climbing-picture" />
    </div>
  );
};

export default ClimbCard;
