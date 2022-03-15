import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DbTypePosts } from '../Types'
// const BaseApi = 'https://jsonplaceholder.typicode.com'
// const BaseApi = 'http://localhost:5000/'
// const BaseApi = 'https://todo-test-pi.vercel.app/api/'
// const BaseApi = 'http://localhost:3000/api/'
const BaseApi = 'https://todo-test-pi.vercel.app/api/'

export const fetchApi = createApi({
  reducerPath: 'fetch/api',
  tagTypes: ['fetch'],
  baseQuery: fetchBaseQuery({ baseUrl: BaseApi }),
  endpoints: (builder) => ({
    getDataFetch: builder.query<DbTypePosts, void>({
      query: () => `/hello/`,
      providesTags: () => ['fetch'],
    }),
    pathDataFetch: builder.mutation<DbTypePosts, void>({
      query: (post) => ({
        url: './hello',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['fetch'],
    }),
  }),
})
