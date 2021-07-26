import { css } from "@emotion/react"
import React from "react"

export default function InlineCode({ children }) {
  return (
    <code
      css={css`
        background-color: rgb(1, 22, 39);
        color: rgb(214, 222, 235);
        line-height: 1.25em;
        padding: 0.125em 0.25em;
        border-radius: 5px;
        font-size: 0.85em;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      `}
    >
      {children}
    </code>
  )
}
