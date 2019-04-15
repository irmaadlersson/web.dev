module.exports = {
  // Slug is used by landing pages like / and /learn to link to this path.
  // Because it affects urls, the slug should never be translated.
  slug: 'accessible',
  cover: '/images/collections/accessible.svg',
  title: 'Accessible to all',
  description: 'Build a site that works for all of your users.',
  overview: `All users should be able to access your content. In this section
    you'll learn how to provide a robust experience to your users that accounts
    for their context and any situational, temporary, or permanent
    disabilities.`,
  topics: [
    {
      title: 'Understand the diverse needs of users',
      guides: ['what-is-accessibility'],
    },
    {
      title: 'Make your site keyboard accessible',
      guides: [
        'style-focus',
        'control-focus-with-tabindex',
      ],
    },
  ],
};