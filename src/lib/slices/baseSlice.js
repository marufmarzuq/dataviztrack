import { createSlice } from "@reduxjs/toolkit";
import { BASE, SITE_INFO } from "utils/dataKeys";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "utils/manageLocalStorage";

const localData = loadFromLocalStorage(BASE);
const siteInfo = loadFromLocalStorage(SITE_INFO);

const initialState = {
  base_data: localData || [],
  site_info: siteInfo || [],
  updated: false,
};

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    saveBase: (state, action) => {
      state.base_data = action.payload.data;
      state.updated = action?.payload.updated;
      saveToLocalStorage(BASE, action.payload.data);
    },
    saveSiteInfo: (state, action) => {
      state.site_info = action.payload;
      saveToLocalStorage(SITE_INFO, action.payload);
    },
  },
});

export const { saveBase, saveSiteInfo } = baseSlice.actions;
export default baseSlice.reducer;
