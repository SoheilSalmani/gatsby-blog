module.exports = {
  siteMetadata: {
    title: "Soheil Salmani",
    description: "Soheil Salmani's personal website.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `revision-notes`,
        path: `content/revision-notes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `exercise-sheets`,
        path: `content/exercise-sheets`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "./src/utils/typography.js",
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: true,
              ordered: true,
              fromHeading: 2,
              toHeading: 6,
              className: "table-of-contents",
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: false,
              removeAccents: false,
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: config => {
          config.node = {
            ...config.node,
            fs: "empty",
            child_process: "empty",
            module: "empty",
          }
        },
      },
    },
  ],
}
