import { Social } from '@/typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'

const query = groq`
  *[_type == "social"] | order(_createdAt asc)
`

type Data = {
  socials: Social[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query)
  res.status(200).json({ socials })
}
