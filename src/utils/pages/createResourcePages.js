const path = require('path');
const paths = require('../../paths');

module.exports = ({ createPage, resources }) => () => {
  resources.forEach(({
    slug,
    reference,
    publishedAt,
  }) => {
    createPage({
      path: paths.getResourcePagePath({slug, publishedAt}),
      component: path.resolve(`src/templates/resource/index.js`),
      context: {
        reference,
      }
    })
  });
}
