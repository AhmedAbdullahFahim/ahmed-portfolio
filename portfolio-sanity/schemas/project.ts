import {defineField, defineType} from 'sanity/lib/exports'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    // next field is to use when the previous one doesn't work properly
    // defineField({
    //   name: 'summary',
    //   title: 'Summary',
    //   type: 'string',
    // }),
    defineField({
      name: 'technologiesMobile',
      title: 'TechnologiesMobile',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    // next field is to use when the previous one doesn't work properly
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    }),
    defineField({
      name: 'linkToCode',
      title: 'LinkToCode',
      type: 'url',
    }),
  ],
})
