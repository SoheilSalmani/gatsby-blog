import { MDXRenderer } from "gatsby-plugin-mdx"
import MDX from "mdx-scoped-runtime"
import React from "react"

import CodeBlock from "./code-block"

export default function BlogPost({ title, mdx, compiledMdx }) {
  let body
  if (mdx || mdx === "") {
    body = (
      <MDX
        components={{
          code: props => <CodeBlock {...props} />,
        }}
      >
        {mdx}
      </MDX>
    )
  } else {
    body = <MDXRenderer>{compiledMdx}</MDXRenderer>
  }

  return (
    <>
      <h1>{title}</h1>
      {body}
    </>
  )
}
