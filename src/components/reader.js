import { css } from "@emotion/react"
import React, { useState, useEffect } from "react"

export default function Reader({ children }) {
  let [currentPosition, setCurrentPosition] = useState(0)

  const handleKeyUp = event => {
    let newPosition
    if (event.key === "ArrowRight") {
      console.log(currentPosition)
      newPosition = currentPosition - 87.5
      setCurrentPosition(newPosition)
    } else if (event.key === "ArrowLeft") {
      newPosition = currentPosition + 87.5
      if (newPosition >= 0) newPosition = 0
      setCurrentPosition(newPosition)
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [currentPosition])

  return (
    <article
      css={css`
        columns: 2;
        column-gap: 3rem;
        column-fill: auto;
        overflow: hidden;
        height: 87.5vh;
    
        > p {
          text-align: justify;
        }

        > * {
          position: relative;
          top: ${currentPosition}vh;
          transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}
    >
      {children}
    </article>
  )
}
