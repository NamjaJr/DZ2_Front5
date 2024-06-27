import { configureStore } from "@reduxjs/toolkit";
import FrontendSlice from './FrontendSlice'
import BackendSlice from "./BackendSlice";
import AndroidSlice from "./AndroidSlice"
import IosSlice from "./IosSlice";
import UxUiSlise from "./UxUiSlise";

const store = configureStore({
    reducer: {
        FrontendSlice,
        BackendSlice,
        AndroidSlice,
        IosSlice,
        UxUiSlise,
    }
});


export default store;



