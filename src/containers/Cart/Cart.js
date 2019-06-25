import React, { Component } from "react";
import { connect } from "react-redux";

// Start Inport Redux Actions
import * as actions from "../../store/actions/cart";

// Start Import Functions
import { NumberFormatter } from '../../helpers/NumberFormatter/NumberFormatter';

// Start Import UI Itens
import Button from '../../components/UI/Button/Button';

// Start Import CSS 
import "./Cart.css";

// Start Import Components
import FullpageLoading from "../../components/UI/FullpageLoading/FullpageLoading";
import CartItem from "../../components/cart/cartItem/cartItem";
import CartSummary from "../../components/cart/cartSummary/cartSummary";
import CartStep from "../../components/cart/cartStep/cartStep";
// End Import Components

export class Cart extends Component {

  // ------------ Page Clycle Events START ---------------
  // -----------------------------------------------------
  // Get Warenkorb Itens from Back End
  componentDidMount() {
     // Ich nehmen an, dass ich schon vorher eine WarenkorbID (HHAD12323) in meinem Lokalen Storage 
     // gespeichert habe oder aus dem Konto (wenn der Nutzer eingellogt ist)
    this.props.fetchCartItems('HHAD12323');
  }

  componentDidUpdate() {
    if (this.props.cartItems == null) {
      // Ich nehmen an, dass ich schon vorher eine WarenkorbID (HHAD12323) in meinem Lokalen Storage 
     // gespeichert habe oder aus dem Konto (wenn der Nutzer eingellogt ist)
      this.props.fetchCartItems('HHAD12323');
    } 

    if(this.props.updateCartItemsDone){
      this.props.history.push('/delivery');
    }
   
  }
  // ------------ Page Clycle Events EDN   ---------------
  // -----------------------------------------------------

  render() {
    let cartItems = <FullpageLoading />;
      let fullLoading = null;    
      let cartSummary = null;
  
      if(this.props.updateCartItemsloading){
        fullLoading = <FullpageLoading />;
      }

      if(this.props.cartSumarry !== null){
        cartSummary = <CartSummary         
          TAX={this.props.cartSumarry.TAX}
          Total={this.props.cartSumarry.Total}
          TotalSum={
            NumberFormatter(
              this.props.cartSumarry.TotalDec + this.props.cartSumarry.TAXDec, 
              { 
                style: 'currency', currency: 'EUR' 
              })
            }
        />;
      }

      if (this.props.cartItems !== null) {      
        cartItems = this.props.cartItems.map(item => {
          return <CartItem key={item.ID} Name={item.Name} Desc={item.Desc} Price={item.Price}  />;
        });
      }
  
      return <div id="Cart">
      <h1>
        Warenkorb 
      </h1>
      <CartStep step='1' />
      {fullLoading}
      {cartItems} 
      {cartSummary}
      <hr /> 
      <div className="actionsHolder">
        {/* Ich nehmen an, dass ich schon vorher eine WarenkorbID (HHAD12323) in meinem Lokalen Storage 
        gespeichert habe */}
        <Button onClick={() => this.props.updateCartItems('HHAD12323')} className="btnSuccess" type="button">Weiter</Button>
      </div>       
    </div>;
  }
}


// ------------ Redux Mapping START ---------------
// ------------------------------------------------
const mapDispatchToProps = dispatch => {
  return {
    fetchCartItems: (cartId) => dispatch(actions.fetchCartItems(cartId)),
    updateCartItems: (cartId) => dispatch(actions.updateCartItems(cartId))
  };
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    cartSumarry: state.cart.cartSumarry,
    updateCartItemsloading: state.cart.updateCartItemsloading,
    updateCartItemsDone: state.cart.updateCartItemsDone
  };
};

// ------------ Redux Mapping END   ---------------
// ------------------------------------------------

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
