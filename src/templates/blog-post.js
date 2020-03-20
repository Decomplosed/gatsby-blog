import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {}

export const query = graphql`
  query($slug: String!) {
    markdownRemark( fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`
