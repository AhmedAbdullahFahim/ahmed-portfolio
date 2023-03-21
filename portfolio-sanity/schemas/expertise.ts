import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    defineField({
      name: 'expertiseTitle',
      title: 'ExpertiseTitle',
      type: 'string',
    }),
    defineField({
      name: 'expertiseImage',
      title: 'ExpertiseImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'expertiseInfo',
      title: 'ExpertiseInfo',
      type: 'string',
    }),
  ],
})
