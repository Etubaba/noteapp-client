import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IInitialState, IUser } from "../interface";

const initialState: IInitialState = {
  resizeDiv: true,
  userData:
    typeof window !== "undefined"
      ? localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user") || "")
        : null
      : null,
  isLoggedIn:
    typeof window !== "undefined"
      ? localStorage.getItem("login")
        ? JSON.parse(localStorage.getItem("login") || "")
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
    handleUserData: (state: IInitialState, action: PayloadAction<IUser>) => {
      state.userData = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userData));
    },
    handleDivResize: (state: IInitialState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { handleLogin, handleUserData, handleDivResize } =
  noteSlice.actions;

export default noteSlice.reducer;
