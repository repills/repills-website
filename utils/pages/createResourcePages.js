const path = require('path');
const paths = require('../paths');

module.exports = ({ createPage, resources }) => () =>
  resources.map(resource => {
    const {
      reference,
      slug,
      publishedAt,
    } = resource.node.frontmatter;
    createPage({
        path: paths.getResourcePagePath({slug, publishedAt}),
        component: path.resolve('src/templates/resource/index.js'),
        context: {
          reference,
        }
      })
    }
  );
