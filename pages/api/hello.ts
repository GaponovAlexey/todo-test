// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DbType, DbTypePosts } from '../../components/Types'

const data: DbTypePosts = {
  posts: [
    {
      id: 1,
      title: 'json-server',
      body: 'typicode',
    },
    {
      id: 2,
      title: 'json-server1',
      body: 'typicode',
    },
  ],
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DbTypePosts>
) {
  res.status(200).json(data)
}
