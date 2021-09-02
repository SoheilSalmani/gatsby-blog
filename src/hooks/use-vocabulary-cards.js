import { useState, useEffect } from "react"
import { collection, addDoc, getDocs } from "firebase/firestore"

import { db } from "../services/firebase"

export default function useVocabularyCards() {
  const [cards, setCards] = useState(null)

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "vocabularyCards"))
    console.log(querySnapshot)
    setCards(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        isFlipped: false,
      }))
    )
  }, [])

  const flipCard = cardId => {
    const cardIndex = cards.findIndex(card => card.id === cardId)
    let newCards = Array.from(cards)
    newCards[cardIndex].isFlipped = !newCards[cardIndex].isFlipped
    setCards(newCards)
  }

  return [cards, flipCard]
}

export const addVocabularyCards = async cards => {
  cards.forEach(async card => {
    await addDoc(collection(db, "vocabularyCards"), card)
  })
}
