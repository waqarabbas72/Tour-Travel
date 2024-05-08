import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://booking-com.p.rapidapi.com/v1/",
  }),
  endpoints: (builder) => ({
    getHotelsDetail: builder.query({
      query: () => `hotels/reviews`,
    }),
  }),
});

export const { useGetHotelsDetailQuery } = bookingApi;
