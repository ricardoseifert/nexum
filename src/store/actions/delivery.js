import * as actionTypes from "./actionTypes";

export const storeDeliveryAndContactData = (deliveryData, contactData, cartId) => {
    return {
        type: actionTypes.STORE_DELIVERY_AND_CONTACT_DATA,
        deliveryData: deliveryData,
        contactData: contactData, 
        cartId: cartId
    }
};

export const fetchDeliveryAndContactData = (cartId) => {
    return {
        type: actionTypes.FETCH_DELIVERY_AND_CONTACT_DATA,
        cartId: cartId
    }
};
  