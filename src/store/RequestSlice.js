import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    aboutRequestSent: false,
    mainRequestSent: false,
    userRequestSent: false,
};

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        sendAboutRequest: (state) => {
            state.aboutRequestSent = true;
        },
        sendMainRequest: (state) => {
            state.mainRequestSent = true;
        },
        sendUserRequest: (state) => {
            state.userRequestSent = true;
        },
    },
});

export const { sendAboutRequest, sendMainRequest, sendUserRequest } = requestSlice.actions;
export default requestSlice.reducer;

