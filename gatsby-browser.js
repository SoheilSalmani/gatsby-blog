import { MDXProvider } from "@mdx-js/react"
import React from "react"

import CodeBlock from "./src/components/code-block"
import Figure from "./src/components/figure"
import InlineCode from "./src/components/inline-code"
import KeyboardShortcut from "./src/components/keyboard-shortcut"
import OnScreenOptions from "./src/components/onscreen-input-options"
import Solution from "./src/components/solution"

const components = {
  code: props => <CodeBlock {...props} />,
  inlineCode: props => <InlineCode {...props} />,
  Screen: props => <OnScreenOptions {...props} />,
  Solution: props => <Solution {...props} />,
  Figure: props => <Figure {...props} />,
  Kbd: props => <KeyboardShortcut {...props} />,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
