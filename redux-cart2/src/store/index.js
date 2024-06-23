import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import basketSlice from './basket-slice';
const store = configureStore({
    reducer: {
        ui: uiSlice,
        basket: basketSlice,
    }
});

export default store;