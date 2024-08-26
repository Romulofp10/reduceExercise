import cartActionTypes from "./actionType";

export const addProductToCart = (payload) =>({
    type: cartActionTypes.ADD_PRODUCT,
    payload,
});

export const removeProductToCart = (payload) =>({
    type: cartActionTypes.REMOVE_PRODUCT,
    payload,
});

export const incrementProductToCart = (payload) =>({
    type: cartActionTypes.INCREMENT_PRODUCT,
    payload,
});

export const decrementProductToCart = (payload) =>({
    type: cartActionTypes.DECREMENT_PRODUCT,
    payload,
});