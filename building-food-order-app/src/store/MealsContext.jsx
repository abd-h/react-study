import { createContext, useState, useReducer } from "react";

export const MealsCxt = createContext({
  handleClick: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );

    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity++,
      };

      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      const product = action.payload.products.find(
        (product) => product.id === action.payload.id
      );
        
      updatedItems.push({
        id: action.payload,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
    return {
      ...state,
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

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }
    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export const MealsContext = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [shoppingCartState, shoppingCartDespatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  const handleClick = () => {
    setModalIsOpen(true);
  };

  const handleClickCart = () => {
    setModalIsOpen(false);
  };

    function handleAddItemsToCart(id, products) {
     
    shoppingCartDespatch({
      type: "ADD_ITEM",
      payload: {
          id,
          products
      },
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

  const mealsCxtValue = {
    handleClick,
    modalIsOpen,
    handleClickCart,
    meals: shoppingCartState.items,
    addItemsToCart: handleAddItemsToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };
  return (
    <MealsCxt.Provider value={mealsCxtValue}>{children}</MealsCxt.Provider>
  );
};
