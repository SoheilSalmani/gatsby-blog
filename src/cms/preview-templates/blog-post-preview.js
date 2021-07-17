import React from "react"

import BlogPost from "../../components/blog-post"
import LayoutPreview from "./layout-preview"

export default function BlogPostPreview({ entry }) {
  return (
    <LayoutPreview>
      <BlogPost
        title={entry.getIn(["data", "title"])}
        mdx={entry.getIn(["data", "body"]) || ""}
      />
    </LayoutPreview>
  )
}
