export default {
  name: 'profile',
  type: 'document',
  title: 'Profile Info',
  fields: [
    {
      name: 'profileName',
      type: 'string',
      title: 'Profile Name',
    },
    {
      name: 'profileImage',
      type: 'image',
      title: 'Profile Image',
    },
    {
      name: 'designation',
      type: 'string',
      title: 'Your Designation',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Your Description',
    },
    {
      name: 'btnUrl',
      type: 'url',
      title: 'Your button Url',
    },
  ],
}
