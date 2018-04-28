module.exports = function({ createPage, sections, resources }) {
  return {
    createHomePage: require('./createHomePage')({ createPage, sections }),
    createLastPage: require('./createLastPage')({ createPage, sections, resources }),
    createSectionPages: require('./createSectionPages')({ createPage, sections }),
    createTopicPages: require('./createTopicPages')({ createPage, sections }),
    createTopicsPages: require('./createTopicsPages')({ createPage, sections }),
    createTypePages: require('./createTypePages')({ createPage, sections }),
    createResourcePages: require('./createResourcePages')({ createPage, sections, resources })
  };
};
