import React from 'react'
import { allAuthors } from 'contentlayer/generated'

import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

const DEFAULT_LAYOUT = 'ResumeLayout'

export default function Resume() {
  const author = allAuthors.find((p) => p.slug === 'resume')
  return (
    <MDXLayoutRenderer
      layout={author?.layout || DEFAULT_LAYOUT}
      content={author}
      MDXComponents={components}
      toc={author?.toc}
      code={''}
    />
  )
}
