import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input onChange={props.changed} {...props.inputproperties} />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea onChange={props.changed} {...props.inputproperties} />
      );
      break;
    default:
      inputElement = (
        <input onChange={props.changed} {...props.inputproperties} />
      );
      break;
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
