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
      <h1>Fiches d'exercices</h1>
      <p>Toutes les fiches d'exercices conçues par Soheil Salmani.</p>
      <hr />
      <h2>
        {exerciseSheets.length}{" "}
        {exerciseSheets.length === 1 ? "fiche" : "fiches"} d'exercices
      </h2>
      {exerciseSheets.map(exerciseSheet => (
        <Link
          to={`/exercise-sheet/${exerciseSheet.slug}/`}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <article key={exerciseSheet.id}>
            <p
              css={css`
                margin-bottom: ${rhythm(0.25)};
              `}
            >
              {exerciseSheet.title}{" "}
            </p>
          </article>
        </Link>
      ))}
    </Layout>
  )
}
