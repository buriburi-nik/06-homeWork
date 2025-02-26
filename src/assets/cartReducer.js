// src/context/cartReducer.js

export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const GET_TOTALS = 'GET_TOTALS';

function cartReducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case INCREASE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      };

    case DECREASE:
      return {
        ...state,
        cart: state.cart
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, amount: item.amount - 1 };
            }
            return item;
          })
          // If amount is 0, remove the item automatically
          .filter((item) => item.amount !== 0),
      };

    case GET_TOTALS: {
      const { totalAmount, totalPrice } = state.cart.reduce(
        (acc, curr) => {
          acc.totalAmount += curr.amount;
          acc.totalPrice += curr.amount * curr.price;
          return acc;
        },
        {
          totalAmount: 0,
          totalPrice: 0,
        }
      );
      return { ...state, totalAmount, totalPrice: parseFloat(totalPrice.toFixed(2)) };
    }

    default:
      return state;
  }
}

export default cartReducer;
