import { createContext, useState, useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchAvailableMeals, mealsOrdered } from "../http";

export const MealsCxt = createContext({
  handleClick: () => {},
});

function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload.id
    );

      // console.log(action.payload.products.find(product => product.id === action.payload.id));

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
        id: action.payload.id,
        name: product.name,
        price: product.price,
        image: product.image,
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
    console.log(state);
    
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

   
    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

     console.log(updatedItem);

    updatedItem.quantity += action.payload.amount;

    console.log(updatedItem);

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

  const [isCheckout, setIsCheckedout] = useState(false);

  const {fetchedData} = useFetch(fetchAvailableMeals, []);

  // console.log(fetchedData);

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
    setIsCheckedout(false)
    
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

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsCheckedout(true);
  }

  async function handleSubmitedOrders(submitedMeals) {
    console.log(submitedMeals);
    try {
      await mealsOrdered(submitedMeals);
    } catch (error) {
      throw new Error('Nothing Submited')
  }
}

  const mealsCxtValue = {
    handleClick,
    modalIsOpen,
    handleClickCart,
    meals: shoppingCartState.items,
    addItemsToCart: handleAddItemsToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    isCheckout,
    handleCheckout,
    mealsOrdered,
    handleSubmitedOrders,
  };
  return (
    <MealsCxt.Provider value={mealsCxtValue}>{children}</MealsCxt.Provider>
  );
};
