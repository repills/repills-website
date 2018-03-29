module.exports = function({ createPage, sections }) {
  return {
    createHomePage: require('./createHomePage')({ createPage, sections }),
    createSectionPages: require('./createSectionPages')({ createPage, sections }),
    createTopicPages: require('./createTopicPages')({ createPage, sections }),
    createTypePages: require('./createTypePages')({ createPage, sections }),
  };
};
