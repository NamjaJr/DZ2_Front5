import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
    'getPost',
    async function (info,{dispatch,rejectWithValue}){
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const data  = responce.json()
        console.log(data)
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        postsSlice: 'Zangetsu'
    },
    reducers: {
        postsInfo: (state, action) => {
            state.postsTitle = 'sukuna'
        },
        postsInfoBack: (state, action) => {
            state.postsTitle = action.payload
        }
    }
})


export const {postsInfo, postsInfoBack} = postsSlice.actions

export default postsSlice.reducer