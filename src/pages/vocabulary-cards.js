import React, { useState } from "react"
import { useEffect } from "react"
import CardForm from "../components/card-form"
import FlippingCard from "../components/flipping-card"

import Layout from "../components/layout"
import useVocabularyCards, {
  addVocabularyCards,
} from "../hooks/use-vocabulary-cards"

export default function VocabularyCardsPage() {
  const [cards, flipCard] = useVocabularyCards()
  return (
    <Layout>
      <h1>Cartes de vocabulaire</h1>
      {cards ? (
        cards.map(card => (
          <>
            <FlippingCard
              key={card.id}
              frontContent={card.fr}
              backContent={card.en}
              isFlipped={card.isFlipped}
            />
            <button
              onClick={() => {
                flipCard(card.id)
              }}
            >
              Retourner
            </button>
          </>
        ))
      ) : (
        <p>Aucune carte...</p>
      )}
      <hr />
      <FlippingCard
        frontContent="Je veux manger"
        backContent="Oui"
        isFlipped={false}
      />
      <CardForm callback={addVocabularyCards} />
    </Layout>
  )
}
