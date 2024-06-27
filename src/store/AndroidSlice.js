import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import Android from "../components/Android";

export const getAndroid = createAsyncThunk(
    'getAndroid',
    async function (_,{dispatch}) {

        dispatch(preloaderOn())

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(getPosts(data))
        dispatch(preloaderOff())
    }
);


const AndroidSlice = createSlice({
    name: 'Android',
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

export const {preloaderOn, preloaderOff,getPosts} = AndroidSlice.actions


export  default AndroidSlice.reducer