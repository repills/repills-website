const path = require('path');
const paths = require('../paths');
const paginate = require('simple-pagination');
// @TODO move in a config file
const resourcesPerPage = 12;

module.exports = ({ createPage, sections, resources }) => () => {

  const pages = [];

  for (let i = 0; i < Math.ceil(resources.length / resourcesPerPage); i++) {
    pages[i] = {};
    // pages[i].types = types;
    pages[i].sections = sections;
    pages[i].pagination = paginate(resources.length, resourcesPerPage, i + 1);
    pages[i].resources = resources.slice(i * resourcesPerPage, (i + 1) * resourcesPerPage);
  }

  // Create first page also without page param
  createPage({
    path: paths.getLastAddedPagePath(),
    component: path.resolve('src/templates/last/index.js'),
    context: pages[0]
  });

  pages.forEach((page, index) => {
    createPage({
      path: paths.getLastAddedPagePath(index + 1),
      component: path.resolve('src/templates/last/index.js'),
      context: page
    });
  });

};

