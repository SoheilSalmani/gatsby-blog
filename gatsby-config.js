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
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
        publicPath: "cms",
        htmlFavicon: "src/assets/logoCircle.png",
        customizeWebpackConfig: (config, { stage, plugins }) => {
          config.resolve = {
            ...config.resolve,
            alias: {
              ...config.resolve.alias,
              path: require.resolve("path-browserify"),
            },
            fallback: {
              ...config.resolve.fallback,
              fs: false,
              child_process: false,
              module: false,
            },
          }
          if (stage === "build-javascript" || stage === "develop") {
            config.plugins.push(plugins.provide({ process: "process/browser" }))
          }
          config.plugins.push(plugins.provide({ Buffer: ["buffer", "Buffer"] }))
        },
      },
    },
  ],
}
