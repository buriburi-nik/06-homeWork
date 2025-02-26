import React, { useContext, useReducer, useEffect } from 'react';
import cartData from '../assets/data';
import cartReducer, {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE,
  DECREASE,
  GET_TOTALS,
} from '../assets/cartReducer';

const CartContext = React.createContext();

const initialState = {
  cart: cartData,
  totalAmount: 0,   
  totalPrice: 0,    
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
