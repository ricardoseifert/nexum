import * as actionTypes from "./actionTypes";
import axios from "axios";
import * as configs from "../../configs";

export const fetchCartItems = (cartId) => {
  return dispatch => {
    axios
      .get(configs.BACKEND_ENDPOINT + "/" + cartId + ".json")
      .then(response => {
        dispatch(fetchCartItemsAction(response.data));
      })
      .catch(error => {
        dispatch(fetchCartItemsFail());
      });
  };
};

export const updateCartItems = (cartId) => {
  return dispatch => {
    dispatch(updateCartItemsLoading());
    axios
      // In Production wird es dann ein POST, kein GET. Ich wurde dann daten aus dem View Nehmen und
      // zum Server Posten 
      .get(configs.BACKEND_ENDPOINT + "/" + cartId + "_UPDATE.json")
      .then(response => {
        dispatch(updateCartItemsAction(response.data));
      })
      .catch(error => {
        dispatch(updateCartItemsActionFail());
      });
  };
};


const makeCartSummary = (cart) => {
  return {
    TAX: cart.TAX,
    Total: cart.Total,
    TAXDec: cart.TAXDec,
    TotalDec: cart.TotalDec    
  }
}

const fetchCartItemsAction = cart => {    
  return {
    type: actionTypes.FETCH_CART_ITEMS,
    cartItems: cart.Items,
    cartSumarry: makeCartSummary(cart), 
    cartId: cart.ID
  };
};

const fetchCartItemsFail = () => {
  return {
    type: actionTypes.FETCH_CART_ITEMS_FAIL,
    getCartItemsFail: true
  };
};

const updateCartItemsAction = (cart) => {
  return {
    type: actionTypes.UPDATE_CART_ITEMS,
    data: cart    
  };
};

const updateCartItemsLoading = () => {
  return {
    type: actionTypes.UPDATE_CART_LOADING,
    updateCartItemsLoading: true
  };
};

const updateCartItemsActionFail = () => {
  return {
    type: actionTypes.UPDATE_CART_ITEMS_FAIL,
    updateCartItemsFail: true
  };
};
