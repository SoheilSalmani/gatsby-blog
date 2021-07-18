module.exports = {
  siteMetadata: {
    title: "Soheil Salmani",
    description: "Soheil Salmani's personal website.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `revisionNotes`,
        path: `content/revision-notes`,
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
