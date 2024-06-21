import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value > 0)
            state.value = Math.max(0,state.value -1)
        },
        moreIncrement: (state) => {
            state.value += 10
        },
        moreDecrement: (state) => {
            if (state.value > 0) {
                state.value = Math.max(0, state. value -10)
            }
        },

        reset: (state) => {
            state.value = 0
        },
    }
});

export const { increment, decrement, moreIncrement, moreDecrement, reset } = counterSlice.actions;

export default counterSlice.reducer;


