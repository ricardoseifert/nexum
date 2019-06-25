import reducer from './cart';
import * as actionTypes from "../actions/actionTypes";

describe('cart reducer', () => {
    it('Sollte return InitalState', () => {
       expect(reducer(undefined, {})).toEqual({
            cartItems: null,
            cartSumarry: null,
            cartId: null,
            getCartItemsFail: false,
            updateCartItemsFail: false,
            updateCartItemsloading: false,
            updateCartItemsDone: false
          });
    });

    it('Sollte FetchItens', () => {
        expect(reducer({
            cartItems: null,
            cartSumarry: null,
            cartId: null
          }, { 
              type: actionTypes.FETCH_CART_ITEMS, 
              cartItems: { Desc: "desc Prod"},
              cartSumarry: { Desc: "desc Prod"}, 
              cartId: 'HHASDH663'
            })).toEqual({
              cartItems: { Desc: "desc Prod"},
              cartSumarry: { Desc: "desc Prod"}, 
              cartId: 'HHASDH663',
              getCartItemsFail: false,
              updateCartItemsFail: false,
              updateCartItemsloading: false,
              updateCartItemsDone: false
            });
        });
});