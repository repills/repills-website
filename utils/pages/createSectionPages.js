const path = require('path');

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    createPage({
      path: section.path,
      component: path.resolve(`src/templates/section/index.js`),
      context: section
      // layout: 'scroll-layout'
    });
  });
