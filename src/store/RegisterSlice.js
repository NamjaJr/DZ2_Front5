import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    'getUser',
    async function (info,{dispatch,rejectWithValue}){
        dispatch(preloaderOn)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        }
        const responce = await fetch('https://jsonplaceholder.typicode.com/users',options)
        const data = await responce.json()
        console.log(data)
        dispatch(preloaderOff())


    }
)


const registerSlice  = createSlice({
    name: 'registerSlice',
    initialState:{
        preloader: false
    },
    reducers: {
        preloaderOn: (state) => {
            state.preloader = true
        },
        preloaderOff:(state) => {
            state.preloader = false
        }
    }
})


export const {preloaderOn, preloaderOff} = registerSlice.actions


export default registerSlice.reducer