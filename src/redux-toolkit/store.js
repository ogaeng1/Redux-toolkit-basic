import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./modules/languageSlice";

export const store = configureStore({
	reducer: {
		language: languageReducer,
	}
})