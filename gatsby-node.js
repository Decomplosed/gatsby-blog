const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type !== `MarkdownRemark`) {
  }
}
