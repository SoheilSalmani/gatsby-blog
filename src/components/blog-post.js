import { MDXRenderer } from "gatsby-plugin-mdx"
import MDX from '@mdx-js/runtime'
import React from "react"

export default function BlogPost({ title, mdx, compiledMdx }) {
  if (mdx) {
    const body = <MDX>{mdx}</MDX>
  } else {
    const body = <MDXRenderer>{compiledMdx}</MDXRenderer>
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
