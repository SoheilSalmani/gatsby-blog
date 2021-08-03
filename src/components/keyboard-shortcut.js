import { css } from "@emotion/react"
import React from "react"

export default function KeyboardShortcut({ children }) {
  const keys = children.split("+").map(key => key.trim())
  return (
    <kbd>
      {keys
        .map(key => (
          <kdb
            css={css`
              color: rgb(0, 0, 225);
              font-size: 0.75em;
              border: 1px rgb(0, 0, 225) solid;
              display: inline-block;
              margin: 0 0.25em 0 0.25em;
              padding: 0 0.25em;
              border-radius: 0.4em;
              vertical-align: middle;
              font-variant: small-caps;

              &:first-child {
                margin-left: 0;
              }

              &:last-child {
                margin-right: 0;
              }
            `}
          >
            {key}
          </kdb>
        ))
        .reduce((list, key) => (
          <>
            {list}+{key}
          </>
        ))}
    </kbd>
  )
}
