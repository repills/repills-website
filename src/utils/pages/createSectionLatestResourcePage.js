const path = require('path');
const paths = require('../../paths');
const paginate = require('simple-pagination');
const {mapTopics, convertTopicsToOrderedArray} = require('../topics');
const RESOURCES_PER_PAGE = 12;

module.exports = ({ createPage, sections, resources }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const numPages = Math.ceil(resources.length / RESOURCES_PER_PAGE);

    Array.from({ length: numPages }).forEach((_, i) => {
      // The page 1 will be the site homepage
      createPage({
        path: paths.getLastAddedPagePath({index: i + 1, sectionSlug: section.slug}),
        component: path.resolve(`src/templates/section/index.js`),
        context: {
          sectionSlug: section.slug,
          sectionName: section.name,
          limit: RESOURCES_PER_PAGE,
          skip: i * RESOURCES_PER_PAGE,
          resourcesCount: section.resourcesCount,
          topicsList: convertTopicsToOrderedArray(mapTopics(section.topics)),
          pagination: paginate(resources.length, RESOURCES_PER_PAGE, i + 1),
        },
      })
    });
  });

