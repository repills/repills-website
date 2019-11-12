const path = require('path');
const paths = require('../../paths');
const paginate = require('simple-pagination');
// @TODO move in a config file
const RESOURCES_PER_PAGE = 12;

module.exports = ({ createPage, sections }) => () => {
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const pages = [];

    for (let i = 0; i < Math.ceil(section.resources.length / RESOURCES_PER_PAGE); i++) {
      pages[i] = {};
      pages[i].section = section;
      pages[i].pagination = paginate(section.resources.length, RESOURCES_PER_PAGE, i + 1);
      pages[i].resources = section.resources.slice(i * RESOURCES_PER_PAGE, (i + 1) * RESOURCES_PER_PAGE);
    }

    pages.forEach((page, index) => {
      createPage({
        path: paths.getLastAddedPagePath({index: index !== 0 && index + 1, sectionSlug: section.slug}),
        component: path.resolve(`src/templates/last/index.js`),
        context: page,
      });
    });
  });
};

