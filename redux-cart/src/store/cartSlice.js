import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
    showCart: false
}

const cartSlice = createSlice({
    name: 'showCart',
    initialState: initialCart,
    reducers: {
        openCart(state) {
            state.showCart = !state.showCart;
        },
        closeCart(state) {
            state.showCart = false
        }
    }
});

export const cartSliceAction = cartSlice.actions;

export default cartSlice.reducer;