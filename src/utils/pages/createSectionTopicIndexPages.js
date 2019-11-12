const path = require('path');
const paths = require('../../paths');

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];

    createPage({
      path: paths.getTopicsIndexPagePath(section.slug),
      component: path.resolve(`src/templates/topics-index/index.js`),
      context: {
        section
      },
    });
  });
