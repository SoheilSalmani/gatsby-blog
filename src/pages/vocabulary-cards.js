import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"
import CardForm from "../components/card-form"
import FlippingCard from "../components/flipping-card"

import Layout from "../components/layout"
import useRevisionNotes from "../hooks/use-revision-notes"
import { addVocabularyCards } from "../hooks/use-vocabulary-cards"
import { rhythm } from "../utils/typography"

export default function VocabularyCardsPage() {
  console.log(addVocabularyCards)
  return (
    <Layout>
      <h1>Cartes de vocabulaire</h1>
      <FlippingCard
        frontContent="Je veux manger"
        backContent="Oui"
        isFlipped={false}
      />
      <CardForm callback={addVocabularyCards} />
    </Layout>
  )
}
