import {
    configureStore
} from "@reduxjs/toolkit";

import testContext from "./test-context";

const store = configureStore({
    reducer: {
        test: testContext.reducer,
    },
});

export default store;