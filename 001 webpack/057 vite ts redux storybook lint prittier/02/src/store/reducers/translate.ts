import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  lang: "EN",
};

const translateSlice = createSlice({
  name: "translate",
  initialState: defaultState,
  reducers: {
    setLang(state, action) {
      const { lang } = action.payload;
      state.lang = lang;
    },
  },
});

export const { setLang } = translateSlice.actions;

export default translateSlice.reducer;
