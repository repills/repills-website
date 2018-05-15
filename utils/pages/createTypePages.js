const path = require('path');
const paginate = require('simple-pagination');
const paths = require('../paths');

// @TODO move in a config file
const resourcesPerPage = 12;

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const types = section.types;
    Object.keys(types).forEach(typeId => {
      const type = Object.assign({}, types[typeId]);
      const pages = [];
      const typeResources = type.resources.sort((a,b) => (new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt)));
      const maxIterations = Math.ceil(typeResources.length / resourcesPerPage);

      for (let i = 0; i < maxIterations; i++) {
        pages[i] = {};
        pages[i].types = types;
        pages[i].sections = sections;
        pages[i].sectionId = sectionId;
        pages[i].type = Object.assign({}, type);
        pages[i].pagination = paginate(typeResources.length, resourcesPerPage, i + 1);
        pages[i].type.resources = typeResources.slice(i * resourcesPerPage, (i + 1) * resourcesPerPage);
      }

      // Create first page also without page param
      createPage({
        path: paths.getTypePagePath({basePath: pages[0].type.path}),
        component: path.resolve(`src/templates/type/index.js`),
        context: pages[0]
      });

      pages.forEach((page, index) => {
        createPage({
          path: paths.getTypePagePath({index: index + 1, basePath: page.type.path}),
          component: path.resolve(`src/templates/type/index.js`),
          context: page
        });
      });
    });
  });
