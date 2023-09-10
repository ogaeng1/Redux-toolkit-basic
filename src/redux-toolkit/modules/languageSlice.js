import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	language: "kr"
}

const languageSlice= createSlice({
	name: "language",
	initialState,
	reducers: {
		selectedLanguage: (state, action) => {
			state.language = action.payload;
		}
	}
})

export const { selectedLanguage } = languageSlice.actions;

export default languageSlice.reducer;