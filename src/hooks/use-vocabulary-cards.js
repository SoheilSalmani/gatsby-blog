import { collection, addDoc } from "firebase/firestore"

import { db } from "../services/firebase"

export default function useVocabularyCards() {}

export const addVocabularyCards = async cards => {
  console.log(cards)
  cards.forEach(async card => {
    await addDoc(collection(db, "vocabularyCards"), card)
  })
}
