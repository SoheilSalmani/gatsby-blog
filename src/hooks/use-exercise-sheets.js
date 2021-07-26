import { graphql, useStaticQuery } from "gatsby"

export default function useExerciseSheets() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fields: { type: { eq: "ExerciseSheet" } } }) {
        nodes {
          id
          frontmatter {
            title
            relatedResources
          }
          body
          fields {
            slug
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(exerciseSheet => ({
    id: exerciseSheet.id,
    title: exerciseSheet.frontmatter.title,
    relatedResources: exerciseSheet.frontmatter.relatedResources,
    slug: exerciseSheet.fields.slug,
    body: exerciseSheet.body,
    tags: exerciseSheet.frontmatter.tags,
  }))
}
