import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <a href={props.info} target="_blank" rel="noopener noreferrer">
      <button>More Info</button>
    </a>
  );
};

export default Button;
