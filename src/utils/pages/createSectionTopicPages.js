const path = require('path');
const paginate = require('simple-pagination');
const paths = require('../../paths');

// @TODO move in a config file
const RESOURCES_PER_PAGE = 12;

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const topics = section.topics;
    Object.keys(topics).forEach(topicId => {

      const topic = Object.assign({}, topics[topicId]);
      const pages = [];
      const topicResources = topic.resources.sort((a,b) => (new Date(b.publishedAt) - new Date(a.publishedAt)));
      const maxIterations = Math.ceil(topicResources.length / RESOURCES_PER_PAGE);

      for (let i = 0; i < maxIterations; i++) {
        pages[i] = {};
        pages[i].topics = topics;
        pages[i].sections = sections;
        pages[i].sectionId = sectionId;
        pages[i].topic = Object.assign({}, topic);
        pages[i].pagination = paginate(topicResources.length, RESOURCES_PER_PAGE, i + 1);
        pages[i].topic.resources = topicResources.slice(i * RESOURCES_PER_PAGE, (i + 1) * RESOURCES_PER_PAGE);
      }

      pages.forEach((page, index) => {
        createPage({
          path: paths.getTopicPagePath({index: index !==0 && index + 1, topicSlug: topic.slug}),
          component: path.resolve(`src/templates/topic/index.js`),
          context: page,
        });
      });
    });
  });
