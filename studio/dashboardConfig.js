export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '62fa839dc5804513832f313a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-u1na3y9h',
                  apiId: '2d1b6b36-fa27-4b0a-bcdd-e8083246081b'
                },
                {
                  buildHookId: '62fa839dfc1ab21337a091b2',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-zq19h7ih',
                  apiId: '071ccf0d-2098-4788-bdaa-c15300195c8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesgrubb/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-zq19h7ih.netlify.app', category: 'apps'}
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
