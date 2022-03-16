import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { title } from 'process'
import { DbTypePosts } from '../Types'
// const BaseApi = 'https://jsonplaceholder.typicode.com'
const BaseApi = 'http://localhost:5000/'
// const BaseApi = 'https://todo-test-pi.vercel.app/api/'
// const BaseApi = 'http://localhost:3000/api/hello'
// const BaseApi = 'https://todo-test-pi.vercel.app/api/'

export const fetchApi = createApi({
  reducerPath: 'fetch/api',
  tagTypes: ['fetch'],
  baseQuery: fetchBaseQuery({ baseUrl: BaseApi }),
  endpoints: (builder) => ({
    getDataFetch: builder.query<DbTypePosts, void>({
      query: () => `posts`,
      providesTags: () => ['fetch'],
    }),
    pathDataFetch: builder.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['fetch'],
    }),
    deletePost: builder.mutation({
      query: (body) => ({
        url: `posts/${body}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['fetch'],
    }),
    toggleMutation: builder.mutation({
      query: (body) => ({
        url: `posts/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['fetch'],
    }),
    corectData: builder.mutation({
      query: (body) => ({
        url: `posts/${body.id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['fetch'],
    }),
  }),
})
