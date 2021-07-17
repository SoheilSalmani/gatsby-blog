import { MDXRenderer } from "gatsby-plugin-mdx"
import MDX from "mdx-scoped-runtime"
import React from "react"

import Wave from "../components/wave"

const UnsupportedComponent = ({ label, ...rest }) => (
  <div {...rest}>
    <code>{label}</code> requires a bit more magic than we are able to display
    in the CMS.
  </div>
)

export default function BlogPost({ title, mdx, compiledMdx }) {
  let body
  if (mdx || mdx === '') {
    body = <MDX
      components={{
        h1: (props) => <h1 style={{ color: 'tomato' }} {...props} />,
      }}
      scope={{
        Wave: <Wave />
      }}
    >{mdx}</MDX>
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
