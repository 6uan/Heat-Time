import React from "react";
import "./Card.css";

const Card = (props) => {
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
    </div>
  );
};

export default Card;
