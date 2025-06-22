import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems;

      if (existingCartItemIndex !== -1) {
        const updatedItem = {
          ...state.items[existingCartItemIndex],
          amount:
            state.items[existingCartItemIndex].amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE":
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);
      return {
        items: filteredItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.amount,
      };
    case "CLEAR":
      return defaultCartState;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
    (defaultState) => {
      const storedCart = localStorage.getItem("cartState");
      return storedCart ? JSON.parse(storedCart) : defaultState;
    }
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCartAction({ type: "ADD", item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE", id });
    },
    clearItem: () => {
      dispatchCartAction({ type: "CLEAR" });
      localStorage.removeItem("cartState"); 
    },
  };
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(cartState));
  }, [cartState]);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
