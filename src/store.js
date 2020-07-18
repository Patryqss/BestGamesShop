import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const initialState = { cart: { itemsInCart: [] } };
export default createStore(allReducers, initialState, applyMiddleware(thunk));
