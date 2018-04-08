module.exports = function({ createPage, sections, resources }) {
  return {
    createHomePage: require('./createHomePage')({ createPage, sections }),
    createSectionPages: require('./createSectionPages')({ createPage, sections }),
    createTopicPages: require('./createTopicPages')({ createPage, sections }),
    createTypePages: require('./createTypePages')({ createPage, sections }),
    createResourcePages: require('./createResourcePages')({ createPage, sections, resources })
  };
};
