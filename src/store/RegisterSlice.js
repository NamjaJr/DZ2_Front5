import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isRegistered: false
}

const registerSlice = createSlice({
    name: 'registerUser',
    initialState,
    reducers: {
        register: (state) => {
            state.isRegistered = true
        }
    }
})



const store = configureStore({
    reducer: {
        registration: registerSlice.reducer
    },
})

export const { register } = registerSlice.actions
export default store


