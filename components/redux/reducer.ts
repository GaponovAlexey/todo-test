import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TypeData } from '../Types'
const BaseApi = 'https://jsonplaceholder.typicode.com'

export const fetchApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseApi }),
  endpoints: (builder) => ({
    getDataFetch: builder.query<TypeData[], string>({
      query: () => `/todos`,
    }),
    // addDataFetch: builder.mutation({
    //   query: () => '/todos'
    // })
  }),
})

