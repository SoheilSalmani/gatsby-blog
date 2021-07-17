import { css } from "@emotion/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <header
        css={css`
          width: 650px;
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
            {data.site.siteMetadata.title}
          </Link>
        </p>
        <nav>
          <ul
            css={css`
              margin: 0;

              > li {
                margin: 0 0 0 ${rhythm(1)};
                list-style-type: none;
              }
            `}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main
        css={css`
          width: 650px;
          max-width: 90vw;
          margin: ${rhythm(1)} auto;

          > p {
            text-align: justify;
          }
        `}
      >
        {children}
      </main>
    </>
  )
}
