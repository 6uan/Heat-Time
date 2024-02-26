import React from "react";
import "./Card.css";
import mia from "../assets/Miami-Heat.svg";

const Card = (props) => {
  console.log(props.home, props.away);
  return (
    <div className="card">
      <p>
        <span className="team"> Miami Heat </span> vs{" "}
        <span className="team">{props.opponent}</span>
      </p>
      <p> at {props.stadium} </p>
      <p> {props.date} </p>
      <a href={props.info} target="_blank" rel="noopener noreferrer">
        <button>More Info</button>
      </a>
      <img className="home-logo" src={props.home} />
      <img className="away-logo" src={props.away} />
    </div>
  );
};

export default Card;
