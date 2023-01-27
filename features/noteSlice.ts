import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IInitialState } from "../interface";

const initialState: IInitialState = {
  resizeDiv: true,
  userData: null,
  isLoggedIn:
    typeof window !== "undefined"
      ? localStorage.getItem("tslogin")
        ? JSON.parse(localStorage.getItem("tslogin") || "")
        : false
      : false,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    handleLogin: (state: IInitialState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem("login", JSON.stringify(state.isLoggedIn));
    },
    handleDivResize: (state: IInitialState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { handleLogin, handleDivResize } = noteSlice.actions;

export default noteSlice.reducer;
