import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <div>
      <span>Bart's Thoughts</span>
    </div>

  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            description
            title
            date
          }
          excerpt
        }
      }
    }
  }
`
