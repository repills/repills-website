const path = require('path');

module.exports = ({ createPage, sections }) => () =>
  createPage({
    path: `/`,
    component: path.resolve(`src/templates/home/index.js`),
    context: {
      sections,
    }
  });
