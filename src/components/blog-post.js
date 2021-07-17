import { MDXRenderer } from "gatsby-plugin-mdx"
import MDX from "@mdx-js/runtime"
import React from "react"

import Layout from "./layout"

export default function BlogPost({ title, mdx, compiledMdx }) {
  let body
  if (mdx) {
    body = <MDX>{mdx}</MDX>
  } else {
    body = <MDXRenderer>{compiledMdx}</MDXRenderer>
  }

  return (
    <Layout>
      <h1>{title}</h1>
      {body}
    </Layout>
  )
}
