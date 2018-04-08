import React from 'react'

class ResourceTemplate extends React.Component {
  render() {
    const resource = this.props.data.markdownRemark



    return (
      <div>
        Resource page
      </div>
    )
  }
}

export default ResourceTemplate

export const ResourceQuery = graphql`
  query ResourceByReference($reference: String!) {
    markdownRemark(frontmatter: { reference: { eq: $reference } }) {
      id
      html
      frontmatter {
        title,
        reference
      }
    }
  }
`