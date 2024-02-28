import React from "react";
import "./Teams.css";
import teamLogos from "../teamLogos";

const Teams = (props) => {
  return (
    <div className="logo-container">
      <img className="home-logo" src={teamLogos[props.home]} />
      <img className="away-logo" src={teamLogos[props.away]} />
    </div>
  );
};

export default Teams;
