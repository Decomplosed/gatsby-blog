import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: rebeccapurple;
`

const MainTitle = styled.h1`
  color: rebeccapurple;
`

export default ({ data }) => (
  <Layout>
    <SEO title='Home' />
    <div>
      <MainTitle>
        Bart's Thoughts ({data.allMarkdownRemark.totalCount})
      </MainTitle>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
