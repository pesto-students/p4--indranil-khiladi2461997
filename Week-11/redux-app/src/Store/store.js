import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
