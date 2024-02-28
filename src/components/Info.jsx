import React from "react";
import "./Info.css";

const Info = (props) => {
  return (
    <div>
      <p> at {props.stadium} </p>
      <p>
        {" "}
        {props.date} • {props.time}{" "}
      </p>
    </div>
  );
};

export default Info;
