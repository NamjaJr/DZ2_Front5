import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alrdReg: false
}

const registerSlice = createSlice({
    name: 'registerUser',
    initialState,
    reducers: {
        register: (state) => {
            state.alrdReg = true
        }
    }
})

export const {register } = registerSlice.actions;
export default registerSlice.reducer;








