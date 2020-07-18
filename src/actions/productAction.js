import { FETCH_PRODUCTS } from './types';
import data from '../items.json';

export const fetchProducts = () => dispatch => {
  let fetchedData = [];
  data.map(x => fetchedData.push(x));
  return dispatch({ type: FETCH_PRODUCTS, payload: fetchedData });
};
