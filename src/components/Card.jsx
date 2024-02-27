import React from "react";
import "./Card.css";
import mia from "../assets/Miami-Heat.svg";

const Card = (props) => {
  console.log(props.home, props.away);
  return (
    <div className="card flex">
      <p>
        <span className="team"> Miami Heat </span> vs{" "}
        <span className="team">{props.opponent}</span>
      </p>
      <p> at {props.stadium} </p>
      <p>
        {" "}
        {props.date} • {props.time}{" "}
      </p>
      <a href={props.info} target="_blank" rel="noopener noreferrer">
        <button>More Info</button>
      </a>
      <div>
        <img className="home-logo" src={props.home} />
        <img className="away-logo" src={props.away} />
      </div>
    </div>
  );
};

export default Card;
