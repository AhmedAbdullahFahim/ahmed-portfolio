import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'
import { Skill } from '@/typings'

const query = groq`
  *[_type == "skill"] | order(_createdAt asc)
`

type Data = {
  skills: Skill[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills = await sanityClient.fetch(query)
  res.status(200).json({ skills })
}
