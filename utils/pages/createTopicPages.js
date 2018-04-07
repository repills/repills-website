const path = require('path');
const paginate = require('simple-pagination');

// @TODO move in a config file
const resourcesPerPage = 24;

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const topics = section.topics;
    Object.keys(topics).forEach(topicId => {

      const topic = Object.assign({}, topics[topicId]);
      const pages = [];
      const topicResources = topic.resources;

      for (let i = 0; i < Math.ceil(topicResources.length / resourcesPerPage); i++) {
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
        path: pages[0].topic.path,
        component: path.resolve(`src/templates/topic/index.js`),
        context: pages[0],
        // layout: 'scroll-layout'
      });

      pages.forEach((page, index) => {
        createPage({
          path: `${page.topic.path}/${index + 1}`,
          component: path.resolve(`src/templates/topic/index.js`),
          context: page,
          // layout: 'scroll-layout'
        });
      });

    });
  });
