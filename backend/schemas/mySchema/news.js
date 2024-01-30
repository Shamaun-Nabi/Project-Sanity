export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'newsTitle',
      type: 'string',
      title: 'News Title',
    },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'News Thumbnail',
    },
    {
      name: 'desc',
      type: 'array',
      of: [{type: 'block'}],
      title: 'News Description',
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'News Category',
    },
  ],
}
