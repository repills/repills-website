const path = require('path');
const paginate = require('simple-pagination');
// @TODO move in a config file
const resourcesPerPage = 24;

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];
    const types = section.types;
    Object.keys(types).forEach(typeId => {

      const type = Object.assign({}, types[typeId]);
      const pages = [];
      const typeResources = type.resources;

      for (let i = 0; i < Math.ceil(typeResources.length / resourcesPerPage); i++) {
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
        path: pages[0].type.path,
        component: path.resolve(`src/templates/type/index.js`),
        context: pages[0],
        // layout: 'scroll-layout'
      });

      pages.forEach((page, index) => {
        createPage({
          path: `${page.type.path}/${index + 1}`,
          component: path.resolve(`src/templates/type/index.js`),
          context: page,
          // layout: 'scroll-layout'
        });
      });
    });
  });
