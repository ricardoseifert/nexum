import React from "react";
import "./cartItem.css";

const CartItem = props => {
  return (
    <div className="itemWrapper">
      <div>
        <div />
      </div>
      <ul>
        <li className="name">{props.Name}</li>
        <li className="desc">{props.Desc}</li>
        <li className="price">{props.Price}</li>
      </ul>
      <button className="btnDanger" type="button">
        Löschen
      </button>
    </div>
  );
};

export default CartItem;
