import { css } from "@emotion/react"
import React from "react"

export default function FlippingCard({ frontContent, backContent, isFlipped }) {
  return (
    <div
      css={css`
        width: 300px;
        height: 200px;
        position: relative;
        perspective: 800px;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          position: absolute;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          border-radius: 6px;
          cursor: pointer;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform: ${isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};

          & > div {
            width: 100%;
            height: 100%;
            border-radius: 6px;
            position: absolute;
            backface-visibility: hidden;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font: 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #47525d;
          }
        `}
      >
        <div>{frontContent}</div>
        <div
          css={css`
            transform: rotateY(180deg);
          `}
        >
          {backContent}
        </div>
      </div>
    </div>
  )
}
