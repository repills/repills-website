const path = require('path');
const paginate = require('simple-pagination');
const paths = require('../paths');

// @TODO move in a config file
const resourcesPerPage = 12;

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const topics = section.topics;
    Object.keys(topics).forEach(topicId => {

      const topic = Object.assign({}, topics[topicId]);
      const pages = [];
      const topicResources = topic.resources.sort((a,b) => (new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt)));
      const maxIterations = Math.ceil(topicResources.length / resourcesPerPage);

      for (let i = 0; i < maxIterations; i++) {
        pages[i] = {};
        pages[i].topics = topics;
        pages[i].sections = sections;
        pages[i].sectionId = sectionId;
        pages[i].topic = Object.assign({}, topic);
        pages[i].pagination = paginate(topicResources.length, resourcesPerPage, i + 1);
        pages[i].topic.resources = topicResources.slice(i * resourcesPerPage, (i + 1) * resourcesPerPage);
      }

      // Create first page also without page param
      createPage({
        path: paths.getTopicPagePath({basePath: pages[0].topic.basePath}),
        component: path.resolve(`src/templates/topic/index.js`),
        context: pages[0],
      });

      pages.forEach((page, index) => {
        createPage({
          path: paths.getTopicPagePath({index: index + 1, basePath: page.topic.basePath}),
          component: path.resolve(`src/templates/topic/index.js`),
          context: page,
        });
      });
    });
  });
