import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDoHTk8exAC9-cV1-4Z1Qw0DMbXAZAAzSs",
  authDomain: "soheil-salmani-website.firebaseapp.com",
  projectId: "soheil-salmani-website",
})

export default firebaseApp
export const db = getFirestore()
