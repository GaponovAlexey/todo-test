import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DbType, TypeData } from '../Types'
// const BaseApi = 'https://jsonplaceholder.typicode.com'
// const BaseApi = 'http://localhost:5000/'
const BaseApi = 'https://todo-test-pi.vercel.app/api/hello'

export const fetchApi = createApi({
  reducerPath: 'fetch/api',
  tagTypes: ['fetch'],
  baseQuery: fetchBaseQuery({ baseUrl: BaseApi }),
  endpoints: (builder) => ({
    getDataFetch: builder.query<DbType[], void>({
      query: () => `/posts/`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'fetch' as const, id })), 'fetch']
          : ['fetch'],
    }),
    pathDataFetch: builder.mutation({
      query: (post) => ({
        url: './posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags:(result, error, arg) => [{ type: 'fetch', id: arg.id }],
    }),
  }),
})
