import { css } from "@emotion/react"
import React from "react"

export default function Figure({ src, alt, children }) {
  return (
    <figure
      css={css`
        max-width: 550px;
        margin: auto;
        margin-bottom: 1.4rem;
        display: block;
        color: rgb(214, 222, 235);
        border-radius: 0 0 5px 5px;
        overflow: hidden;
        box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
      `}
    >
      <img
        src={src}
        alt={alt}
        css={css`
          border: solid 2px #2a3c4f;
          display: block;
          overflow: hidden;
          width: 100%;
          margin: 0;
        `}
      />
      <figcaption
        css={css`
          text-align: justify;
          padding: 0.5rem;
          background-color: #2a3c4f;
        `}
      >
        {children}
      </figcaption>
    </figure>
  )
}
