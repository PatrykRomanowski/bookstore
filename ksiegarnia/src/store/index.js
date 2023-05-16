import { configureStore } from "@reduxjs/toolkit";

import testContext from "./test-context";
import loginContext from "./login-context";
import paypalContext from "./paypalRender-context";

const store = configureStore({
  reducer: {
    test: testContext.reducer,
    login: loginContext.reducer,
    paypal: paypalContext.reducer,
  },
});

export default store;
