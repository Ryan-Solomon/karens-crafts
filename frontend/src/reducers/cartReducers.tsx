import { CART_ADD_ITEM } from '../constants/cartConstants';
import { Action } from '../types/types';

export const cartReducer = (state = { cartItems: [] }, action: Action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existsItem = state.cartItems.find(
        //   @ts-ignore
        (x) => x.product === item.product
      );

      if (existsItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            //   @ts-ignore
            x.product === existsItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
