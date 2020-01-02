import CartActionTypes from './cart.types';
import CarActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CarActionTypes.ADD_ITEM,
    payload: item
});