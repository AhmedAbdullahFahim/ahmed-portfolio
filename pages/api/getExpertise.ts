import { Expertise } from '@/typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '@/sanity'


const query = groq`
  *[_type == "expertise"] | order(_createdAt asc)
`

type Data = {
  expertise: Expertise[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const expertise = await sanityClient.fetch(query)
  res.status(200).json({ expertise })
}
