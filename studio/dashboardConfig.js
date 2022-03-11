export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '622b73dfe7f2ab2a871d21ac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ybt944cg',
                  apiId: 'c63d2968-7b37-4ad1-8a14-e921aad7f264'
                },
                {
                  buildHookId: '622b73df8620b921480e91da',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kbvs7yk1',
                  apiId: '127cf8f9-7a73-4380-ab6e-638dd6b388b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dsipal/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kbvs7yk1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
