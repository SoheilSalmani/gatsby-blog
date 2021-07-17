import React from "react"

export default function LayoutPreview({ children }) {
  return (
    <article
      style={{
        boxShadow: "1px 1px 2px black",
        padding: "1rem",
        marginTop: "1rem",
        border: "solid #bbb 1px",
        backgroundColor: "white",
      }}
    >
      {children}
    </article>
  )
}
