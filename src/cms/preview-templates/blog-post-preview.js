import React from 'react'

import BlogPost from '../../components/blog-post'
import Layout from '../../components/layout'

export default function BlogPostPreview({ entry }) {
  return (
    <Layout>
      <BlogPost
        title={entry.getIn(['data', 'title'])}
        mdx={entry.getIn(['data', 'mdx'])}
      />
    </Layout>
  )
}
