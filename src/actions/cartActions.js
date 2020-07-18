import { ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const addToCart = (itemsInCart, itemToAdd) => dispatch => {
        const cartItems = itemsInCart.slice();
        let checkItem = false //To check if the product is new or already in the cart
        cartItems.forEach(item => {
          if (item.id === itemToAdd.id) {
            checkItem = true;
            item.quantity++;
          }
        });
        if (!checkItem) {
            cartItems.push({...itemToAdd, quantity: 1});
        }
        dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (itemsInCart, itemToRemove) => dispatch => {
    let cartItems = itemsInCart.slice();
    let removeItem = false //To check if more than 1 product is in the cart
    cartItems.forEach(item => {
        if (item.id === itemToRemove.id && item.quantity > 1) {
          item.quantity--;
        } else if (item.id === itemToRemove.id && item.quantity === 1) {
          removeItem = true;
        }
      })
      if (!removeItem) dispatch({ type: REMOVE_FROM_CART, payload: { cartItems }});
      else {
        cartItems = itemsInCart.slice().filter((x) => x.id !== itemToRemove.id);
        dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
      }
};