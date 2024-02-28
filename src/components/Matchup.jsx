import React from "react";
import "./Matchup.css";
import teamNames from "../teamNames";

const Matchup = (props) => {
  return (
    <p>
      <span className="team">{teamNames[props.home]}</span>
      <span> vs </span>
      <span className="team">{teamNames[props.away]}</span>
    </p>
  );
};

export default Matchup;
