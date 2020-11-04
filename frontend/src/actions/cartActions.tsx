import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id: string, qty: number) => async (
  dispatch: any,
  getState: any
) => {
  const { data } = await axios.get(`/api/product/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
