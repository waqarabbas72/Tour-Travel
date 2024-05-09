import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://all-in-one-recipe-api.p.rapidapi.com",
    headers: {
      'X-RapidAPI-Key': 'a81d2279e5mshe3dd6222ed7d694p1014e3jsncd78d3c6024b',
      'X-RapidAPI-Host': 'all-in-one-recipe-api.p.rapidapi.com'
    }
  }),
  endpoints: (builder) => ({
    fetchCuisines: builder.query({
      query: () => `/categories/chicken`,
    }),
  }),
});

// Export hooks for usage in functional components, including useDispatch and useSelector
export const { useFetchCuisinesQuery } = bookingApi;
