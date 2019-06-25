import React from "react";
import "./Button.css";

const button = props => {
  return <button {...props}>{props.children}</button>;
};

export default button;
