import { createSlice } from "@reduxjs/toolkit";
import { CREDENTIALS } from "utils/dataKeys";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "utils/manageLocalStorage";

const localData = loadFromLocalStorage(CREDENTIALS);

const initialState = {
  user_details: localData || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user_details = action.payload;
      saveToLocalStorage(CREDENTIALS, action.payload);
    },
    logout: (state) => {
      state.user_details = null;
      saveToLocalStorage(CREDENTIALS, null);
    },
  },
});

export const { saveUser, logout } = authSlice.actions;
export default authSlice.reducer;
