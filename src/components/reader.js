import { css } from "@emotion/react"
import React, { useState, useEffect, useRef } from "react"

export default function Reader({ children }) {
  let [currentPosition, setCurrentPosition] = useState(0)
  const reader = useRef(null)

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
    } else if (event.key === "ArrowUp") {
      toggleFullScreen()
    }
  }

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      reader.current.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        reader.current.exitFullscreen()
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [currentPosition, handleKeyUp])

  return (
    <article
      ref={reader}
      css={css`
        columns: 2;
        column-gap: 3rem;
        column-fill: auto;
        overflow: hidden;
        height: 87.5vh;
        background-color: white;

        > p {
          text-align: justify;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          top: ${currentPosition}vh;
          transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        `}
      >
        {children}
      </div>
    </article>
  )
}
