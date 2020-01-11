import CartActionTypes from './cart.types';
import CarActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CarActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CarActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CarActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});