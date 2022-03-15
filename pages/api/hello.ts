// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DbTypePosts } from '../../components/Types'
import data from '../../db.json'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DbTypePosts>
) {
  res.status(200).json(data)
}
