const path = require('path');
const paginate = require('simple-pagination');
const paths = require('../../paths');
const {mapTopics, convertTopicsToOrderedArray} = require('../topics');
// @TODO move in a config file
const RESOURCES_PER_PAGE = 12;

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const topics = section.topics;
    const orderedTopics = convertTopicsToOrderedArray(mapTopics(topics));

    Object.keys(topics).forEach(topicId => {
      const topic = Object.assign({}, topics[topicId]);
      const numPages = Math.ceil(topic.resources.length / RESOURCES_PER_PAGE);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: paths.getTopicPagePath({index: i !== 0 && i + 1, topicSlug: topic.slug}),
          component: path.resolve(`src/templates/topic/index.js`),
          context: {
            topicSearchSlug: topicId,
            topicSlug: topic.slug,
            topicTitle: topic.title,
            topicDescription: topic.description,
            limit: RESOURCES_PER_PAGE,
            skip: i * RESOURCES_PER_PAGE,
            pagination: paginate(topic.resources.length, RESOURCES_PER_PAGE, i + 1),
            topicsList: orderedTopics,
          },
        })
      });
    });
  });
