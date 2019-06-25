import React from "react";
import "./Header.css";

const header = props => {
  return (
    <header>
      <div className={props.className}>{props.children}</div>
    </header>
  );
};

export default header;
