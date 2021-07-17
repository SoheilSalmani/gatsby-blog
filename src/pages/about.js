import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default function AboutPage({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        tempore dolorem beatae temporibus maxime cumque assumenda quaerat dicta,
        natus eos voluptatum, eius ratione amet eveniet quia voluptatem aut,
        praesentium veritatis iure molestiae eligendi sunt! Omnis blanditiis
        velit nesciunt unde, deserunt, quod totam voluptatum magni adipisci qui
        animi, doloribus maiores. Vitae!
      </p>
    </Layout>
  )
}
