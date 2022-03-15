import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { dbType, TypeData } from '../Types'
// const BaseApi = 'https://jsonplaceholder.typicode.com'
const BaseApi = 'http://localhost:5000'

export const fetchApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseApi }),
  endpoints: (b) => ({
    getDataFetch: b.query<dbType[], string>({
      query: () => `/posts`,
    }),
    // addDataFetch: builder.mutation({
    //   query: () => '/todos'
    // })
  }),
})
