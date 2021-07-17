import { css } from "@emotion/react"
import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import { rhythm } from "../utils/typography"

export default function HomePage() {
  const posts = usePosts()

  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        tempore dolorem beatae temporibus maxime cumque assumenda quaerat dicta,
        natus eos voluptatum, eius ratione amet eveniet quia voluptatem aut,
        praesentium veritatis iure molestiae eligendi sunt! Omnis blanditiis
        velit nesciunt unde, deserunt, quod totam voluptatum magni adipisci qui
        animi, doloribus maiores. Vitae!
      </p>
      <hr />
      <h2>{posts.length} Posts</h2>
      {posts.map(post => (
        <Link
          to={`/blog/${post.slug}/`}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <article key={post.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(0.25)};
              `}
            >
              {post.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {post.date}
              </span>
            </h3>
            <p>{post.excerpt}</p>
          </article>
        </Link>
      ))}
    </Layout>
  )
}
