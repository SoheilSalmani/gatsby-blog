import { css } from "@emotion/react"
import React from "react"

export default function OnScreenOptions({ children }) {
  const options = children.split(" | ")
  return (
    <kbd
      css={css`
        background-color: rgb(214, 222, 235);
        font-size: 0.85em;
        border-radius: 5px;
        padding: 0.125em 0.25em;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      `}
    >
      {options
        .map(option => (
          <kbd>
            <samp>{option}</samp>
          </kbd>
        ))
        .reduce((list, option) => (
          <>
            {list} | {option}
          </>
        ))}
    </kbd>
  )
}
