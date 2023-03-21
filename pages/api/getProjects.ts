import { Project } from '@/typings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '@/lib/sanity'

const query = groq`
  *[_type == "project"] | order(order asc)
`

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects = await sanityClient.fetch(query)
  res.status(200).json({ projects })
}
