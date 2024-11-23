import { createContext, useContext, useReducer } from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          count: (state[action.payload.id]?.count || 0) + 1,
        }
      };
    case 'REMOVE_BOOK':
      if (!state[action.payload.id]) {
        return state;
      }
      if (state[action.payload.id].count > 1) {
        return {
          ...state,
          [action.payload.id]: {
            ...action.payload,
            count: state[action.payload.id].count - 1,
          }
        };
      }
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [ cart, dispatch ] = useReducer(cartReducer, {});
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      { children }
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
