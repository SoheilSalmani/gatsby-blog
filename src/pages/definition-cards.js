import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import useExerciseSheets from "../hooks/use-exercise-sheets"
import { rhythm } from "../utils/typography"

export default function ExerciseSheetsPage() {
  const exerciseSheets = useExerciseSheets()

  return (
    <Layout>
      <h1>Cartes de définition</h1>
      <h2>Français</h2>
      <h2>Anglais</h2>
    </Layout>
  )
}
