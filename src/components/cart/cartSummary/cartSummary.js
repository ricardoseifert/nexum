import React from 'react';
import './cartSummary.css';

const CartSummary = props => {
    return (
        <div className="cartSummary">
        <hr />
        <ul>
            <li>
                Kosten <span>{ props.Total }</span>
            </li>        
            <li>
                Mehrwertsteuer <span>{ props.TAX }</span>
            </li>
            
            <li>
                Gesamtsumme <span>{ props.TotalSum }</span>
            </li>
        </ul>
        </div>
    );
}

export default CartSummary;


