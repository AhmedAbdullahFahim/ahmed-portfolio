import { Expertise } from '@/typings'

export const fetchExpertise = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExpertise`)

  const data = await res.json()
  const expertise: Expertise[] = data.expertise
  
  

  return expertise
}
