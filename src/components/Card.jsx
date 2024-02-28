import React from "react";
import "./Card.css";
import Teams from "./Teams";
import Button from "./Button";
import Matchup from "./Matchup";
import Info from "./Info";

const Card = (props) => {
  console.log(props.home, props.away);
  return (
    <div className="card flex">
      <Matchup home={props.home} away={props.away} />
      <Info stadium={props.stadium} date={props.date} time={props.time} />
      <Button info={props.info} />
      <Teams home={props.home} away={props.away} />
    </div>
  );
};

export default Card;
