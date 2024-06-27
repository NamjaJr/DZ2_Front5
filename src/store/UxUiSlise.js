import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import UxUi from "../components/UxUi";

export const getUxUi = createAsyncThunk(
    'getUxUi',
    async function (_,{dispatch}) {

        dispatch(preloaderOn())

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(getPosts(data))
        dispatch(preloaderOff())
    }
);


const UxUiSlice = createSlice({
    name: 'UxUi',
    initialState: {
        preloader: false,
        arrState: []
    },
    reducers: {
        preloaderOn: (state) => {
            state.preloader = true
        },
        getPosts:(state,action) => {
            state.arrState = action.payload
        },

        preloaderOff:(state) => {
            state.preloader = false
        }
    }
})

export const {preloaderOn, preloaderOff,getPosts} = UxUiSlice.actions


export  default UxUiSlice.reducer