const path = require('path');
const {mapTopics, convertTopicsToOrderedArray} = require('../topics');

module.exports = ({ createPage, sections }) => () =>
  createPage({
    path: `/contribution`,
    component: path.resolve(`src/templates/contribution/index.js`),
    context: {
      topicsList: convertTopicsToOrderedArray(mapTopics(sections['reactjs'].topics)),
    }
  });
