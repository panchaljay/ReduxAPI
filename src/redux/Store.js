import {  configureStore } from "@reduxjs/toolkit"
import apiSlice from "./slice/Api";

const store =  configureStore({
    reducer:{
        api:apiSlice.reducer
    }
})

export default store