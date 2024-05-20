import { createSlice } from "@reduxjs/toolkit";

const quantitySliceInitial = {
    quantity: 0,
}

const quantitySlice = createSlice({
    name: 'Additem',
    initialState: quantitySliceInitial,
    reducers: {
        increaseQuantity(state) {
            state.quantity++;
        }, 

        decreaseQuantity(state) {
            state.quantity--;
        }

    }
})

export const quantityActions = quantitySlice.actions;

export default quantitySlice.reducer;