const path = require('path');

module.exports = ({ createPage, sections }) => () => {
  const section = sections['reactjs'];
  createPage({
    path: `/`,
    component: path.resolve(`src/templates/section/index.js`),
    context: {
      sectionSlug: section.slug,
      sectionName: section.name,
      resourcesCount: section.resourcesCount,
      topics: section.topics,
      limit: 12,
    }
  });
}
