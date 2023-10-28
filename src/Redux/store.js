import { configureStore } from "@reduxjs/toolkit";
import restuarantSlice from "./restuatantSlice";

const store = configureStore({
    reducer:{
        restuarantSlice
    }
})
export default store