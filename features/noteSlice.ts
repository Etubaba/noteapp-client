import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { EditNote, IInitialState, IUser } from "../interface";

const initialState: IInitialState = {
  resizeDiv: true,
  noteDetails: {
    id: 0,
    title: "",
    content: "",
  },
  noteContent: "",
  dependant: 1,
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
    handleNoteContent: (
      state: IInitialState,
      action: PayloadAction<string>
    ) => {
      state.noteContent = action.payload;
    },
    handleDivResize: (state: IInitialState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    handleEditNote: (state: IInitialState, action: PayloadAction<EditNote>) => {
      state.noteDetails = action.payload;
    },
    handleRefresh: (state: IInitialState) => {
      state.dependant += 1;
    },
  },
});

export const {
  handleLogin,
  handleUserData,
  handleNoteContent,
  handleDivResize,
  handleRefresh,
  handleEditNote,
} = noteSlice.actions;

export default noteSlice.reducer;
