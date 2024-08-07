import { configureStore } from "@reduxjs/toolkit";
import counterLight from "../feature/createLight";

export const store = configureStore({
  reducer: {
    light: counterLight,
  },
});
