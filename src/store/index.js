import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './AboutSlice';
import mainReducer from './MainSlice';
import userReducer from './UserSlice';
import requestSlice from "./RequestSlice";
import registerSlice from "./RegisterSlice";

const store = configureStore({
    reducer: {
        AboutSlice: aboutReducer,
        MainSlice: mainReducer,
        UserSlice: userReducer,
        request: requestSlice,
        RegisterSlice:registerSlice
    },
});

export default store;



