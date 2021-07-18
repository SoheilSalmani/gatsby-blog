import CMS from "netlify-cms-app"

import RevisionNotePreview from "./preview-templates/revision-note-preview"

CMS.registerPreviewTemplate("blog", RevisionNotePreview)
