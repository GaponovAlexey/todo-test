import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DbType, TypeData } from '../Types'
// const BaseApi = 'https://jsonplaceholder.typicode.com'
const BaseApi = 'http://localhost:5000/'

export const fetchApi = createApi({
  reducerPath: 'fetch/api',
  tagTypes: ['fetch'],
  baseQuery: fetchBaseQuery({ baseUrl: BaseApi }),
  endpoints: (builder) => ({
    getDataFetch: builder.query({
      query: () => `/posts/`,
      providesTags: () => ['fetch'],
    }),
    pathDataFetch: builder.mutation({
      query: (post) => ({
        url: './posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['fetch'],
    }),
  }),
})
