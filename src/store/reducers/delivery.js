import * as actionTypes from "../actions/actionTypes";

const initalState = {
    deliveryData: null,
    contactData: null,
    cartId: null,
    updateDeliveryDone: false
};
  
// Ich würde es alles in server stuern, genauso wie in Cart reducer. 
// In dieser Stelle bzw, weil hier der Kunde kein Konto hat, wüder ich ein Konto im Server erstellen 
const storeDeliveryAndContactData = (state, action) => {
    return {
        ...initalState,    
        deliveryData: action.deliveryData,
        contactData: action.contactData, 
        cartId: action.cartId, 
        updateDeliveryDone: true
    };
};

// Ich würde es alles in server stuern, genauso wie in Cart. 
const fetchDeliveryAndContactData = (state, action) => {
  return {
      ...initalState,    
      deliveryData: action.deliveryData,
      contactData: action.contactData, 
      cartId: action.cartId, 
      updateDeliveryDone: false
  };
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
      case actionTypes.STORE_DELIVERY_AND_CONTACT_DATA:
        return storeDeliveryAndContactData(state, action);
      case actionTypes.FETCH_DELIVERY_AND_CONTACT_DATA:
          return fetchDeliveryAndContactData(state, action);
      default:
        return state;
    }
  };

export default reducer;