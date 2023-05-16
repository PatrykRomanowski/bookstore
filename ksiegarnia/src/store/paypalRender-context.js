import { createSlice } from "@reduxjs/toolkit";

const paypalContext = createSlice({
  name: "paypal",
  initialState: { isBuild: false },
  reducers: {
    build(state) {
      state.isBuild = true;
    },
  },
});

export const paypalActions = paypalContext.actions;

export default paypalContext;
