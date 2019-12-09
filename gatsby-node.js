
const config = require('./src/config');
const pagesUtilities = require('./src/utils/pages');
const fillSectionsFromEdges = require('./src/utils/fillSectionsFromEdges');
const resourcesUtils = require('./src/utils/resources');

const frontmatter = config.resources;

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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

      const resources = result.data.allMarkdownRemark.edges.map(resourcesUtils.normalizeResource);
      const sections = fillSectionsFromEdges(resources);
      const pageBuilder = pagesUtilities({ createPage, sections, resources });

      // Homepage
      pageBuilder.createHomePage();

      // Section Topics index pages
      pageBuilder.createSectionTopicIndexPages();

      // Section topics resources pages
      pageBuilder.createSectionTopicPages();

      // Latest resources pages
      pageBuilder.createSectionLatestResourcePage();

      // Contribution page
      // pageBuilder.createContributionPage()

      // Resource pages
      pageBuilder.createResourcePages();

      resolve();
    });
  });
};
