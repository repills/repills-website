const path = require('path');
const paths = require('../../paths');
const {mapTopics, convertTopicsToOrderedArray} = require('../topics');

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];

    createPage({
      path: paths.getTopicsIndexPagePath(section.slug),
      component: path.resolve(`src/templates/topics-index/index.js`),
      context: {
        sectionName: section.name,
        topicsList: convertTopicsToOrderedArray(mapTopics(section.topics)),
      },
    });
  });
