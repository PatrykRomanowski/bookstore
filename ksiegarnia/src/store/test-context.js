import {
    createSlice
} from "@reduxjs/toolkit";

const testContext = createSlice({
    name: "testContext",
    initialState: {
        value: 0,
        items: [],
    },

    reducers: {
        addValue(state, actions) {
            state.value = state.value + actions.payload.price;

            const itemIndex = state.items.findIndex(item => item.id === actions.payload.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].counter = state.items[itemIndex].counter + 1;
            } else {
                state.items.push(actions.payload.item);
            }
        }
    }
});

export const testContextActions = testContext.actions;

export default testContext;