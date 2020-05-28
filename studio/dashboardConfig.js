export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecfb8d465a4b6027964bd47',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-owtzua3o',
                  apiId: '03335004-66e6-4911-bf55-e08e90df0649'
                },
                {
                  buildHookId: '5ecfb8d4aede4c6f8d55f271',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kptyh8p7',
                  apiId: 'bd0585e2-499b-488f-9082-e7e284fdb3f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/russelpovey/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kptyh8p7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
