import { css } from "@emotion/react"
import React from "react"

export default function Solution({ label, children }) {
  return (
    <details
      css={css`
        border: 1px solid #aaa;
        border-radius: 4px;
        padding: 0.5em 0.5em 0;

        summary {
          transition: background-color 0.2s linear;
        }

        summary:hover {
          background-color: #eee;
          cursor: pointer;
        }

        &[open] {
          padding: 0.5em;
        }

        &[open] summary {
          border-bottom: 1px solid #aaa;
          margin-bottom: 0.5em;
        }
      `}
    >
      <summary
        css={css`
          font-weight: bold;
          margin: -0.5em -0.5em 0;
          padding: 0.5em;
        `}
      >
        Solution
      </summary>
      <div className="content">{children}</div>
    </details>
  )
}
