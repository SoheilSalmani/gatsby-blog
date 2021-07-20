import { graphql, useStaticQuery } from "gatsby"

export default function useRevisionNotes() {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            resourceId
            stoppedAt
          }
          excerpt
          body
          fields {
            slug
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(revisionNote => ({
    id: revisionNote.id,
    title: revisionNote.frontmatter.title,
    resourceId: revisionNote.frontmatter.resourceId,
    stoppedAt: revisionNote.frontmatter.stoppedAt,
    slug: revisionNote.fields.slug,
    body: revisionNote.body,
  }))
}
