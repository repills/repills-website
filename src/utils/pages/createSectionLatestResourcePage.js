const path = require('path');
const paths = require('../../paths');
const paginate = require('simple-pagination');
// @TODO move in a config file
const RESOURCES_PER_PAGE = 12;

module.exports = ({ createPage, sections, resources }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const numPages = Math.ceil(resources.length / RESOURCES_PER_PAGE);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: paths.getLastAddedPagePath({index: i !== 0 && i + 1, sectionSlug: section.slug}),
        component: path.resolve(`src/templates/last/index.js`),
        context: {
          sectionSlug: section.slug,
          sectionName: section.name,
          limit: RESOURCES_PER_PAGE,
          skip: i * RESOURCES_PER_PAGE,
          pagination: paginate(resources.length, RESOURCES_PER_PAGE, i + 1),
        },
      })
    });
  });

