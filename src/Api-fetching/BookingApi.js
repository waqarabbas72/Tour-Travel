import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "test.api.amadeus.com/v2",
  }),
  endpoints: (builder) => ({
    getHotelsDetail: builder.query({
      query: () => `/booking/hotel-orders`,
    }),
  }),
});

export const { useGetHotelsDetailQuery } = bookingApi;
