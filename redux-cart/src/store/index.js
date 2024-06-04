import { configureStore } from "@reduxjs/toolkit";
import addToCartSliceActions  from "./add-to-cart-slice";
import uiSliceActions  from "./ui-slice";

const store = configureStore({
    reducer: {
        ui: uiSliceActions,
        addToCart: addToCartSliceActions,
    }
});

export default store;
