import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import restaurantsReducer from "./restaurantSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
  },
});

setupListeners(store.dispatch);

export default store;
