import React, { useState } from "react"

export default function CardForm({ callback }) {
  const [language1, setLanguage1] = useState("fr")
  const [language2, setLanguage2] = useState("en")
  const [frontText, setFrontText] = useState("")
  const [backText, setBackText] = useState("")
  const handleSubmit = event => {
    event.preventDefault()
    const card = {}
    card[language1] = frontText
    card[language2] = backText
    callback([card])
  }
  const handleLanguage1Change = event => {
    setLanguage1(event.target.value)
  }
  const handleLanguage2Change = event => {
    setLanguage2(event.target.value)
  }
  const handleFrontTextChange = event => {
    setFrontText(event.target.value)
  }
  const handleBackTextChange = event => {
    setBackText(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>
          Langue 1&nbsp;:
          <select onChange={handleLanguage1Change}>
            <option value="en">Anglais</option>
            <option selected value="fr">
              Français
            </option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Langue 2&nbsp;:
          <select onChange={handleLanguage2Change}>
            <option selected value="en">
              Anglais
            </option>
            <option value="fr">Français</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Côté avant&nbsp;:
          <textarea onChange={handleFrontTextChange}></textarea>
        </label>
      </p>
      <p>
        <label>
          Côté arrière&nbsp;:
          <textarea onChange={handleBackTextChange}></textarea>
        </label>
      </p>
      <button>Add card</button>
    </form>
  )
}
