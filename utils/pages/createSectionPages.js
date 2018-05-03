const path = require('path');

module.exports = ({ createPage, sections }) => () =>
  Object.keys(sections).forEach(sectionId => {
    const section = sections[sectionId];

    const topics = Object.keys(section.topics).map(topicId => (section.topics[topicId]));
    topics.sort((a, b) => {
      const keyA = a.resources.length,
        keyB = b.resources.length;
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
    });

    createPage({
      path: section.path,
      component: path.resolve(`src/templates/section/index.js`),
      context: Object.assign(section, {topics})
      // layout: 'scroll-layout'
    });
  });
