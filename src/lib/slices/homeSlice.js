import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../../utils/manageLocalStorage";
import { CREDENTIALS } from "../../utils/dataKeys";

const localData = loadFromLocalStorage(CREDENTIALS) || {};

const initialState = {
  curr_view: localData?.token ? "list" : "fu",
  curr_data: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCurrView: (state, action) => {
      state.curr_view = action.payload;
    },
    setCurrData: (state, action) => {
      state.curr_data = action.payload;
    },
  },
});

export const { setCurrView, setCurrData } = homeSlice.actions;
export default homeSlice.reducer;
