import { configureStore } from '@reduxjs/toolkit';
import cartSliceAction from './cartSlice';
import quantitySlice from './quantitySlice';

const store = configureStore({
    reducer: {
        cart: cartSliceAction, quantity: quantitySlice
    }
});

export default store;