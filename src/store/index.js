import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './AboutSlice';
import mainReducer from './MainSlice';
import userReducer from './UserSlice';
import requestSlice from "./RequestSlice";

const store = configureStore({
    reducer: {
        AboutSlice: aboutReducer,
        MainSlice: mainReducer,
        UserSlice: userReducer,
        request: requestSlice
    },
});

export default store;



