import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { appReducer, modalReducer } from "./reducers";

const store = configureStore({
	reducer: {
		app: appReducer,
		modal: modalReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
