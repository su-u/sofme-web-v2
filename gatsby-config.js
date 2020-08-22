// const dotenv = require("dotenv")

// if (process.env.ENVIRONMENT !== "production") {
//   dotenv.config()
// }

module.exports = {
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: 'UA-116699912-9',
    //     head: true,
    //   }
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    // 'gatsby-transformer-remark',
    'gatsby-plugin-typescript',
    // {
    //   resolve: 'gatsby-plugin-graphql-codegen',
    //   options: {
    //     fileName: 'types/graphql-types.d.ts'
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-intl',
    //   options: {
    //     path: `${__dirname}/src/locales`,
    //     languages: ['ja', 'en'],
    //     defaultLanguage: 'ja',
    //     redirect: true,
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/pages`,
        name: 'pages',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/static/img`,
    //     name: 'img',
    //   },
    // },
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: process.env.spaceId,
    //     accessToken: process.env.accessToken,
    //   },
    // },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-toc',
            options: {
              header: '目次',
              include: ['src/pages/blog/*.md'],
            },
          },
        ],
      },
    },
  ]
}