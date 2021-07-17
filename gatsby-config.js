module.exports = {
  siteMetadata: {
    title: "Pandas Eating Lots",
    description: "Demo site.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `posts`,
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
    "gatsby-plugin-netlify-cms"
  ],
}
