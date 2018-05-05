const config = require('repills-config');
const fillSectionsFromEdges = require('./utils/fillSectionsFromEdges');
const pagesUtilities = require('./utils/pages');
const frontmatter = config.resources;

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdAt] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
          frontmatter {
            ${frontmatter.join('\n')}
          }
        }
      }
    }
  }`)
      .then(result => {
        if (result.errors) { reject(result.errors); return; }

        const resources = result.data.allMarkdownRemark.edges;
        const sections = fillSectionsFromEdges(resources);
        const pageBuilder = pagesUtilities({ createPage, sections, resources });

        // Page index
        pageBuilder.createHomePage();

        // Resource Pages
        pageBuilder.createLastPage();

        // Section Overview Pages
        pageBuilder.createSectionPages();

        // Section Topics Pages
        pageBuilder.createTopicsPages();

        // Topic Pages
        pageBuilder.createTopicPages();

        // Type Pages
        pageBuilder.createTypePages();

        // Resource Pages
        pageBuilder.createResourcePages();

        resolve();
      });
  });
};
