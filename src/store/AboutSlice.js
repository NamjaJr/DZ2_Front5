import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAbout = createAsyncThunk(
    'getAbout',
    async function (_, { dispatch }) {
        dispatch(preloaderOn());
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(getPosts(data));
        dispatch(preloaderOff());
    }
);

const AboutSlice = createSlice({
    name: 'AboutPage',
    initialState: {
        preloader: false,
        arrState: []
    },
    reducers: {
        preloaderOn: (state) => {
            state.preloader = true;
        },
        getPosts: (state, action) => {
            state.arrState = action.payload;
        },
        preloaderOff: (state) => {
            state.preloader = false;
        }
    }
});

export const { preloaderOn, preloaderOff, getPosts } = AboutSlice.actions;
export default AboutSlice.reducer;
