const path = require('path');
const {mapTopics, convertTopicsToOrderedArray} = require('../topics');

module.exports = ({ createPage, sections }) => () => {
  const section = sections['reactjs'];
  createPage({
    path: `/`,
    component: path.resolve(`src/templates/section/index.js`),
    context: {
      sectionSlug: section.slug,
      sectionName: section.name,
      resourcesCount: section.resourcesCount,
      topicsList: convertTopicsToOrderedArray(mapTopics(section.topics)),
      limit: 12,
    }
  });
}
