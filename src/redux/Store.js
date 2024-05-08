import { configureStore } from "@reduxjs/toolkit";
import { bookingApi } from "../Api-fetching/BookingApi";

export const Store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookingApi.middleware),
});
