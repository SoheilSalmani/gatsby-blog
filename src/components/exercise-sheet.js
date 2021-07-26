import { css } from "@emotion/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MDX from "mdx-scoped-runtime"
import React from "react"

import CodeBlock from "./code-block"

export default function ExerciseSheet({ title, mdx, compiledMdx }) {
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
      <h1
        css={css`
          margin-top: 0;
        `}
      >
        {title}
      </h1>
      {body}
    </>
  )
}
