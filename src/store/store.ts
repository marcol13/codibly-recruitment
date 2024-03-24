import { Middleware, applyMiddleware, configureStore } from "@reduxjs/toolkit";
import {appReducer, modalReducer} from "./reducers";

const store = configureStore({
    reducer: {
        app: appReducer,
        modal: modalReducer
    }
})

export default store;