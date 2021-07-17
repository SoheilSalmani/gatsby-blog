import React, { useState } from "react"

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `👋 ${waves} ${waves === 1 ? "wave" : "waves"}`

  return (
    <button
      style={{
        background: "rebeccapurple",
        border: "none",
        color: "white",
        fontSize: "1.25rem",
      }}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  )
}

export default Wave
