import React, { Component } from "react";
import { connect } from "react-redux";

// Start Inport Redux Actions
import * as actions from "../../store/actions/delivery";

// Start Import UI Itens
import Button from '../../components/UI/Button/Button';

// Start Import CSS 
import './Delivery.css';

// Start Import Components
import CartStep from "../../components/cart/cartStep/cartStep";
import Input from "../../components/UI/Input/Input";
// End Import Components

// Start Inport Helpers
import * as FormHelpers from "../../helpers/Form/Form";

export class Delivery extends Component {

  // ich würde hier in der Zukunfit die Validationslogik aber auch Mask Logik machen. 
  // Die Idee von einer "generic formular" bleibt. Auch mit Validation und mask. 
  state = {
    shippingForm: {
      street: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Straße und Hausnummer *",
          type: "text",
          value: ""
        }
      },
      add: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Adresszusatz / Firma / c/o (optional)",
          type: "text",
          value: ""
        }
      },
      zipCode: {
        inputtype: "input",
        inputproperties: {
          className: "zipCode",
          placeholder: "Postleitzahl *",
          type: "text",
          maxLength: "5",
          value: ""
        }
      },
      city: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Stadt *",
          type: "text",
          value: ""
        }
      }
    },
    dataForm: {
      email: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Email *",
          type: "email",
          value: ""
        }
      },
      password: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Passwort *",
          type: "password",
          value: ""
        }
      },
      passwordconfirm: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Passwort wiederholen *",
          type: "password",
          value: ""
        }
      },
      username: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Vorname *",
          type: "text",
          value: ""
        }
      },
      lastName: {
        inputtype: "input",
        inputproperties: {
          placeholder: "Nachname *",
          type: "text",
          value: ""
        }
      },
    }
  };

  changeForm = (event, inputIdentifier, formState, stateKey) => {
    const changedForm = { ...formState };
    const changedInput = { ...changedForm[inputIdentifier] };

    const changedInputproperties = { ...changedInput.inputproperties };
    changedInputproperties.value = event.target.value;

    changedInput.inputproperties = changedInputproperties;
    changedForm[inputIdentifier] = changedInput;

    switch (stateKey) {
      case 'shippingForm':
        this.setState({ shippingForm: changedForm });
        break;
      case 'dataForm':
        this.setState({ dataForm: changedForm });
        break;
      default:
        return null;
    }

  }

  // ------------ Input Events Hanlders START ---------------
  // --------------------------------------------------------
  inputChangeHandlerShipping = (event, inputIdentifier) => {
    this.changeForm(event, inputIdentifier, this.state.shippingForm, 'shippingForm');
  }; 
  
  inputChangeHandlerContact = (event, inputIdentifier) => {    
    this.changeForm(event, inputIdentifier, this.state.dataForm, 'dataForm');
  };

  onNextHandler(){
    // Ich nehmen an, dass ich schon vorher eine WarenkorbID (HHAD12323) in meinem Lokalen Storage 
    // gespeichert habe
    this.props.storeDeliveryAndContactData(
      FormHelpers.StateFormToKeyPair(this.state.shippingForm), 
      FormHelpers.StateFormToKeyPair(this.state.dataForm), 
      this.props.cartId);
  }
  // ------------ Input Events Hanlders END   ---------------
  // --------------------------------------------------------
  
  // ------------ Page Clycle Events START ---------------
  // -----------------------------------------------------  
  componentDidMount() {

    // 
    this.props.fetchDeliveryAndContactData('HHAD12323');

    // Wenn den Path aufgerüft wird aber kein WarenkorbID vorhanden ist, leitet den Benutzer wieder zu /cart
    if(this.props.cartId === null)
    {
      this.props.history.push('/cart');
    }
  }

  componentDidUpdate(){
    if(this.props.updateDeliveryDone){
      this.props.history.push('/payment');
    }
  }

  // ------------ Page Clycle Events EDN   ---------------
  // -----------------------------------------------------

  render(){

    // In dieser Stelle würde ich checken, ob der Kunde schon eingellogt ist. Wenn ja, das Formular
    // unten wäre amders. Alle die Infos würde vom Server kommen da, das Konto würde mit dem WarenkordIB schon verknüpft.   /
    let login = <div>
      Haben Sie bereits ein Konto?. <a href='#'>Loggen Sie sich ein</a>
    </div>

    // State Objekt zu Inputs Array - Shipping Form
    const formElementsArrayShippingForm = [];
    for (let key in this.state.shippingForm) {
      formElementsArrayShippingForm.push({
        id: key,
        config: this.state.shippingForm[key]
      });
    }

    // State Objekt zu Inputs Array - Contact Form 
    const formElementsArrayDataForm = [];
    for (let key in this.state.dataForm) {
      formElementsArrayDataForm.push({
        id: key,
        config: this.state.dataForm[key]
      });
    }

   return <div id="Delivery">
     <h1>
        Liefer- Kontaktdaten 
      </h1>
     <CartStep step='2' />
     <div className="formHolder">
        {login}
        <h3>
          Lieferdaten
        </h3>
          {formElementsArrayShippingForm.map(formElement => (
            <Input
              changed={event => this.inputChangeHandlerShipping(event, formElement.id)}
              inputtype={formElement.config.inputtype}
              key={formElement.id}
              inputproperties={formElement.config.inputproperties}
            />
          ))}
        <h3>
          Kontaktdaten / Kontoerstellung
        </h3>
          {formElementsArrayDataForm.map(formElement => (
            <Input
              changed={event => this.inputChangeHandlerContact(event, formElement.id)}
              inputtype={formElement.config.inputtype}
              key={formElement.id}
              inputproperties={formElement.config.inputproperties}
            />
          ))}
        </div>
        <hr /> 
        <div className="actionsHolder">
          <Button onClick={(cartId) => this.onNextHandler(cartId)} className="btnSuccess" type="button">Weiter</Button>
        </div>   
     </div>
    }
};

// ------------ Redux Mapping START ---------------
// ------------------------------------------------
const mapDispatchToProps = dispatch => {
  return {
    storeDeliveryAndContactData: (deliveryData, contactData, cartId) => dispatch(actions.storeDeliveryAndContactData(deliveryData, contactData, cartId)),
    fetchDeliveryAndContactData: (cartId) => dispatch(actions.fetchDeliveryAndContactData(cartId))    
  };
};

const mapStateToProps = state => {
    return {
      cartItems: state.cart.cartItems,
      cartId: state.cart.cartId,
      updateDeliveryDone: state.delivery.updateDeliveryDone
    };
  };

// ------------ Redux Mapping END   ---------------
// ------------------------------------------------

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Delivery);
