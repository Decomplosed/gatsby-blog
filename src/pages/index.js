import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

export default ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <div>
      <h1>Bart's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
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
