import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

// const initialState = { itemsInCart: [] };
export default function(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { itemsInCart: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { itemsInCart: action.payload.cartItems };
    default:
      return state;
  }
}
