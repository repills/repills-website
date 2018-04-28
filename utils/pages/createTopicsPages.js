const path = require('path');

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const topics = section.topics;

    createPage({
      path: `${section.path}topics/`,
      component: path.resolve(`src/templates/topics/index.js`),
      context: {
        section,
        topics
      }
    });

  });
