import React from "react";
import "./cartStep.css";

const cartStep = props => {
  return (
    <div className="stepWrapper">
      <ul>
        <li>{ props.step === '1' ? <span>Warenkorb</span> : 'Warenkorb' }</li>
        <li>{ props.step === '2' ? <span>Lieferung- Kontaktdaten</span> : 'Lieferung- Kontaktdaten' }</li>
        <li>{ props.step === '3' ? <span>Zahlungsart</span> : 'Zahlungsart' }</li>
        <li>{ props.step === '4' ? <span>bestellungsbestätigung</span> : 'bestellungsbestätigung' }</li>
        <li>{ props.step === '5' ? <span>Fertig</span> : 'Fertig' }</li>
      </ul>
      <hr />
    </div>
  );
};

export default cartStep;
