const path = require('path');

module.exports = ({ createPage, sections }) => () =>
  createPage({
    path: `/`,
    component: path.resolve(`src/templates/section/index.js`),
    context: {
      sectionSlug: 'reactjs',
      section: sections['reactjs']
    }
  });
