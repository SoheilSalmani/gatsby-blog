import { MDXProvider } from "@mdx-js/react"
import React from "react"

import CodeBlock from "./src/components/code-block"

const components = {
  code: props => <CodeBlock {...props} />,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
