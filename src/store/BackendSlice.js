import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import Backend from "../components/Backend";

export const getBackend = createAsyncThunk(
    'getBackend',
    async function (_,{dispatch}) {

        dispatch(preloaderOn())

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(getPosts(data))
        dispatch(preloaderOff())
    }
);


const BackendSlice = createSlice({
    name: 'Backend',
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

export const {preloaderOn, preloaderOff,getPosts} = BackendSlice.actions


export  default BackendSlice.reducer