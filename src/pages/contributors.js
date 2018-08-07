import React from 'react'
import { graphql } from 'gatsby'
// import { normalizeResource } from '../../utils/resources';


export default function Index({ data }) {

  const listAuthors = data.allMarkdownRemark.listAuthors;
  const resourcesByAuthors = data.allMarkdownRemark.group;

  return (
    <div>
      <h1>{listAuthors.length} contributors</h1>
      <div>
        {
          listAuthors.map(nickname => (
            <div>{nickname}</div>
          ))
        }
      </div>
      <div>
        {
          resourcesByAuthors.map(item => (
            <div>
              <h4>{item.fieldValue} ({item.totalCount} pills added)</h4>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query AuthorsQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___createdAt] }
    ) {
      totalCount #total number of posts
      listAuthors:distinct(field:frontmatter___suggestedBy) #list of distinct author names
      group(
        field:frontmatter___suggestedBy, 
        limit: 2
      ) {
        fieldValue
        totalCount
      }
    }
  }
`;
