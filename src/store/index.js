import { configureStore } from "@reduxjs/toolkit";
import FrontendSlice from  './TabsSlice'


const store = configureStore({
    reducer: {
        FrontendSlice
    }
});


export default store;



