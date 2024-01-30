export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'projectImage',
      type: 'image',
      title: 'Project Image',
    },
    {
      name: 'projectUrl',
      type: 'url',
      title: 'Project Url',
    },
    {
      name: 'githubUrl',
      type: 'url',
      title: 'Girhub Url',
    },
    {
      name: 'projectName',
      type: 'string',
      title: 'Project Name',
    },
  ],
}
