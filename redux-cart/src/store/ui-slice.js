import { createSlice } from "@reduxjs/toolkit";

const initialUiSlice = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiSlice,
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      console.log(action.status);
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
