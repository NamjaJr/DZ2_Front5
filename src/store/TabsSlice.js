import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import Frontend from "../components/Frontend";

export const getFrontend = createAsyncThunk(
    'getTabs',
    async function (info,{dispatch}) {

        dispatch(preloaderOn())

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(getFrontend(data))
        dispatch(preloaderOff())
    }
);


const FrontendSlice = createSlice({
    name: 'Tabs',
    initialState: {
        preloader: false,
        arrState: []
    },
    reducers: {
        preloaderOn: (state) => {
            state.preloader = true
        },
        getFrontend:(state,action) => {
            state.arrState = action.payload
        },

        preloaderOff:(state) => {
            state.preloader = false
        }
    }
})

export const {preloaderOn, preloaderOff,getPosts} = FrontendSlice.actions


export default FrontendSlice.reducer







