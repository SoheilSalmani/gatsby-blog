import { graphql } from "gatsby"
import React from "react"

import Reader from "../components/reader"
import ExerciseSheet from "../components/exercise-sheet"
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

export default function ExerciseSheetTemplate({ data }) {
  const title = data.mdx.frontmatter.title
  const compiledMdx = data.mdx.body

  return (
    <Layout>
      {/* <Reader> */}
      <ExerciseSheet title={title} compiledMdx={compiledMdx} />
      {/* </Reader> */}
    </Layout>
  )
}
