import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/manageLocalStorage";
import { UNSAVED_FILE } from "../../utils/dataKeys";

const localData = loadFromLocalStorage(UNSAVED_FILE) || {};

const initialState = {
  unsaved_file: localData || null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    saveAsUnsavedFile: (state, action) => {
      state.unsaved_file = action.payload;
      saveToLocalStorage(UNSAVED_FILE, action.payload);
    },
  },
});

export const { saveAsUnsavedFile } = homeSlice.actions;
export default homeSlice.reducer;
