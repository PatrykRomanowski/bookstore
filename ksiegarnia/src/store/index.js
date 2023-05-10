import { configureStore } from "@reduxjs/toolkit";

import testContext from "./test-context";
import loginContext from "./login-context";

const store = configureStore({
  reducer: {
    test: testContext.reducer,
    login: loginContext.reducer,
  },
});

export default store;
