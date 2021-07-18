import React from "react"

import RevisionNote from "../../components/revision-note"
import LayoutPreview from "./layout-preview"

export default function RevisionNotePreview({ entry }) {
  return (
    <LayoutPreview>
      <RevisionNote
        title={entry.getIn(["data", "title"])}
        mdx={entry.getIn(["data", "body"]) || ""}
      />
    </LayoutPreview>
  )
}
