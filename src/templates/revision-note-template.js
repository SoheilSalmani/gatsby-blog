import { graphql } from "gatsby"
import React from "react"

import Reader from "../components/reader"
import RevisionNote from "../components/revision-note"
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

export default function RevisionNoteTemplate({ data }) {
  const title = data.mdx.frontmatter.title
  const compiledMdx = data.mdx.body

  return (
    <Layout>
      {/* <Reader> */}
      <RevisionNote title={title} compiledMdx={compiledMdx} />
      {/* </Reader> */}
    </Layout>
  )
}
