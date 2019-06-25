import React, { Component } from "react";

// Start Import CSS 
import './Payment.css';

// Start Import Components
import CartStep from "../../components/cart/cartStep/cartStep";
// End Import Components

export class Payment extends Component {
    render(){
        return <div id="Delivery">
        <h1>
           Zahlungsart
         </h1>
        <CartStep step='3' />

        Hier habe ich nicht mehr zeit gehabt. 

        </div>
    }
}
export default Payment;