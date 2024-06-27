import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import Frontend from "../components/Frontend";

export const getFrontend = createAsyncThunk(
    'getTabs',
    async function (_,{dispatch}) {

        dispatch(preloaderOn())

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(getPosts(data))
        dispatch(preloaderOff())
    }
);


const FrontendSlice = createSlice({
    name: 'Frontend',
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

export const {preloaderOn, preloaderOff,getPosts} = FrontendSlice.actions


export default FrontendSlice.reducer







