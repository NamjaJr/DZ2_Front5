import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import Ios from "../components/Ios";

export const getIos = createAsyncThunk(
    'getIos',
    async function (_,{dispatch}) {

        dispatch(preloaderOn())

        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        dispatch(getPosts(data))
        dispatch(preloaderOff())
    }
);


const IosSlice = createSlice({
    name: 'Ios',
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

export const {preloaderOn, preloaderOff,getPosts} = IosSlice.actions


export  default IosSlice.reducer