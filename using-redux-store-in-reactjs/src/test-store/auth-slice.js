import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { authenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.authenticated = true;
        },
        
        logout(state) {
            state.authenticated = false;
        },
    }
})

export const authActions = authSlice.actions;

export default authSlice.reducer;