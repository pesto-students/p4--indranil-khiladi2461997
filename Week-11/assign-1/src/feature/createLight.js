import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: false,
};

export const counterLight = createSlice({
  name: "light",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = counterLight.actions;

export default counterLight.reducer;
