import { createSlice } from "@reduxjs/toolkit";

const initialAddToCartState = {
    items: [],
    totalPrice: 0,
    quantity: 0,
}

const addToCartSlice = createSlice({
    name: 'quantity',
    initialState: initialAddToCartState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.quantity++;
         
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
                state.totalPrice = newItem.price;
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
            state.totalPrice = state.items.reduce((acc, item) => acc + item.totalPrice, 0)
         },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.quantity--; 
            if (existingItem.quantity === 1) {
               state.items.splice(0,1)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                
            }
            state.totalPrice = state.totalPrice - existingItem.price;
        },
        
        
    }
});

export const addToCartSliceActions = addToCartSlice.actions;
export default addToCartSlice.reducer;