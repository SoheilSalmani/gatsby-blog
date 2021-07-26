import { Global, css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"

import useSiteMetadata from "../hooks/use-site-metadata"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const { title } = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            > a.anchor {
              visibility: hidden;
            }

            &:hover > a.anchor {
              visibility: visible;
            }
          }

          p,
          ul {
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
          }

          li {
            margin: 0.25rem 0;

            &:first-child {
              margin-top: 0;
            }

            &:last-child {
              margin-bottom: 0;
            }
          }

          ul ul {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
          }

          a.anchor {
            margin-left: 0.25em;
            background: none;
          }
        `}
      />
      <header
        css={css`
          width: 700px;
          max-width: 90vw;
          margin: ${rhythm(1)} auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <p
          css={css`
            margin: 0;
          `}
        >
          <Link
            to="/"
            css={css`
              color: black;
              font-weight: bold;
              text-decoration: none;
              font-size: 1.5rem;
            `}
          >
            {title}
          </Link>
        </p>
        <nav>
          <ul
            css={css`
              margin: 0;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;

              > li {
                margin: 0 0 0 ${rhythm(0.5)};
                list-style-type: none;
              }

              & a {
                text-decoration: none;
              }
            `}
          >
            <li>
              <Link to="/revision-notes">Revision Notes</Link>
            </li>
            <li>
              <Link to="/exercise-sheets">Exercise Sheets</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main
        css={css`
          width: 700px;
          max-width: 90vw;
          margin: ${rhythm(1)} auto;
          position: relative;
        `}
      >
        {children}
      </main>
    </>
  )
}
