import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setFullPageLoading: (state, action) => {
      state.fullpage = action.payload;
    },
  },
});

export const { setFullPageLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
