import { createSlice } from "@reduxjs/toolkit";
import { Decimal } from "decimal.js";

const testContext = createSlice({
  name: "testContext",
  initialState: {
    value: 0,
    items: [],
  },

  reducers: {
    addValue(state, actions) {
      state.value = new Decimal(state.value)
        .plus(new Decimal(actions.payload.price))
        .toNumber();
      const itemIndex = state.items.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].counter = state.items[itemIndex].counter + 1;
      } else {
        state.items.push(actions.payload.item);
      }
    },

    deleteItem(state, action) {
      // return state;
      const newListItem = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = newListItem;

      state.value = new Decimal(state.value)
        .minus(new Decimal(action.payload.price).times(action.payload.counter))
        .toNumber();
    },
    resetItems(state) {
      state.items = [];
      state.value = 0;
    },
  },
});

export const testContextActions = testContext.actions;

export default testContext;
