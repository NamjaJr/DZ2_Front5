import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

import registerSlice from "./RegisterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        registerSlice: registerSlice,
    }
});



export default store;



