import { createSlice } from '@reduxjs/toolkit';
const initialBasketState = {
    items: [],
    totalQuantity: 0,
    changed: false,
}

const basketSlice = createSlice({
  name: "basket",
  initialState: initialBasketState,
  reducers: {
    replaceBasket(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    
    addToBasket(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
      removeItemFromBasket(state, action) {
          const id = action.payload;
          const existingItem = state.items.find(item => item.id === id);

          state.totalQuantity--
          state.changed = true;

          if (existingItem.quantity === 1) {
              state.items = state.items.filter(item => item.id !== id);
          } else {
              existingItem.quantity--;
              existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
          }
    },
  },
});

export const basketActions = basketSlice.actions;
export default basketSlice.reducer;