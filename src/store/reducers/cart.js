import * as actionTypes from "../actions/actionTypes";

const initalState = {
  cartItems: null,
  cartSumarry: null,
  cartId: null,
  getCartItemsFail: false,
  updateCartItemsFail: false,
  updateCartItemsloading: false,
  updateCartItemsDone: false
};

const fetchCartItems = (state, action) => {
  return {
    ...initalState,
    cartItems: action.cartItems,
    cartSumarry: action.cartSumarry,
    cartId: action.cartId,
    getCartItemsFail: false
  };
};

const fetchCartItemsFail = (state, action) => {
  return {
    ...initalState,
    getCartItemsFail: true
  };
};

const updateCartItems = (state, action) => {
  if(action.data.Status === 'OK'){
    return {
      ...initalState,
      cartItems: state.cartItems,
      cartSumarry: state.cartSumarry,
      cartId: state.cartId,
      getCartItemsFail: false, 
      updateCartItemsloading: false, 
      updateCartItemsDone: true
    };
  }
  else{
    return {
      ...initalState,
      cartItems: state.cartItems,
      cartSumarry: state.cartSumarry,
      cartId: state.cartId,
      getCartItemsFail: true, 
      updateCartItemsloading: true      
    };
  }
 
};

const updateCartItemsLoading = (state, action) => {
  return {
    ...initalState,
    cartItems: state.cartItems,
    cartSumarry: state.cartSumarry,
    cartId: state.cartId,
    updateCartItemsloading: true
  };
};

const updateCartItemsFail = (state, action) => {
  return {
    ...initalState,    
    cartItems: action.cartItems,
    cartSumarry: action.cartSumarry,    
    updateCartItemsFail: true
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CART_ITEMS:
      return fetchCartItems(state, action);
    case actionTypes.FETCH_CART_ITEMS_FAIL:
      return fetchCartItemsFail(state, action);
    case actionTypes.UPDATE_CART_ITEMS:
      return updateCartItems(state, action);
    case actionTypes.UPDATE_CART_LOADING:
      return updateCartItemsLoading(state, action);
    case actionTypes.UPDATE_CART_ITEMS_FAIL:
      return updateCartItemsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
