import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isRegistered: false
};

const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        register: (state) => {
            state.isRegistered = true;
        },
    },
});

export const { register } = registerSlice.actions

const store = configureStore({
    reducer: {
        registration: registerSlice.reducer
    },
});

export default store

