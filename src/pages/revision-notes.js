import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import useRevisionNotes from "../hooks/use-revision-notes"
import { rhythm } from "../utils/typography"

export default function RevisionNotesPage() {
  const revisionNotes = useRevisionNotes()

  return (
    <Layout>
      <h1>Fiches de révision</h1>
      <p>Toutes les fiches de révision conçues par Soheil Salmani.</p>
      <hr />
      <h2>
        {revisionNotes.length} {revisionNotes.length === 1 ? "fiche" : "fiches"}{" "}
        de révision
      </h2>
      {revisionNotes.map(revisionNote => (
        <Link
          to={`/revision-note/${revisionNote.slug}/`}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <article key={revisionNote.id}>
            <p
              css={css`
                margin-bottom: ${rhythm(0.25)};
              `}
            >
              {revisionNote.title}{" "}
              {revisionNote.stoppedAt && (
                <span
                  css={css`
                    color: #d00;
                  `}
                >
                  (stopped at: {revisionNote.stoppedAt})
                </span>
              )}
            </p>
          </article>
        </Link>
      ))}
    </Layout>
  )
}
