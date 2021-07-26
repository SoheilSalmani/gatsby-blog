const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type RevisionNote implements Node @dontInfer {
      id: ID!
      path: String!
      title: String!
      body: String!
      tags: [String]!
      updated: Date! @dateformat
    }
  `)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const fileNode = getNode(node.parent)
    const slug = fileNode.name
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    if (fileNode.sourceInstanceName === "revision-notes") {
      createNodeField({
        node,
        name: `type`,
        value: `RevisionNote`,
      })
    } else if (fileNode.sourceInstanceName === "exercises") {
      createNodeField({
        node,
        name: `type`,
        value: `ExerciseSheet`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const allRevisionNotes = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "RevisionNote" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  const allExercises = await graphql(`
    query {
      allMdx(filter: { fields: { type: { eq: "ExerciseSheet" } } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  allRevisionNotes.data.allMdx.nodes.forEach(node => {
    createPage({
      path: path.join("/revision-note/", node.fields.slug),
      component: path.resolve(`./src/templates/revision-note-template.js`),
      context: {
        id: node.id,
      },
    })
  })

  allExercises.data.allMdx.nodes.forEach(node => {
    createPage({
      path: path.join("/exercise-sheet/", node.fields.slug),
      component: path.resolve(`./src/templates/exercise-sheet-template.js`),
      context: {
        id: node.id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}
