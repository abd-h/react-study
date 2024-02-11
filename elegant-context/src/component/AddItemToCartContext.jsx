import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "./dummy-products";
export const AddItemsToCtx = createContext({
  items: [],
  handleAddItemsToCart: () => {},
  handleUpdateCartItemQuantity: () => {},
});

// learning React useReducer
function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );

    const existingCartItem = updatedItems[existingCartItemIndex];
    console.log(existingCartItem);
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity++,
      };

      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );

      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    return {
      ...state, // not needed here because we have only one value
      items: updatedItems,
    };
  }
  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];

    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    //   console.log(updatedItem.quantity += amount);

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      console.log("Its minus 1");
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    return {
      ...state, // not needed here because we have only one value
      items: updatedItems,
    };
  }
  return state;
}

const AddItemToCartContext = ({ children }) => {
  

  const [shoppingCartState, shoppingCartDespatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemsToCart(id) {
    shoppingCartDespatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDespatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }
  console.log(shoppingCartState.items);
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemsToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    DUMMY_PRODUCTS,
  };

  return (
    <AddItemsToCtx.Provider value={ctxValue}>{children}</AddItemsToCtx.Provider>
  );
};

export default AddItemToCartContext;
