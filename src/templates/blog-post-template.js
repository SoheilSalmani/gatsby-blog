import { graphql } from "gatsby"
import React from "react"

import BlogPost from "../components/blog-post"
import Layout from "../components/layout"

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default function BlogPostTemplate({ data }) {
  const title = data.mdx.frontmatter.title
  const compiledMdx = data.mdx.body

  return (
    <Layout>
      <BlogPost title={title} compiledMdx={compiledMdx} />
    </Layout>
  )
}
