module.exports = function({ createPage, sections, resources }) {
  return {
    createHomePage: require('./createHomePage')({ createPage, sections }),
    createSectionTopicIndexPages: require('./createSectionTopicIndexPages')({ createPage, sections }),
    createSectionTopicPages: require('./createSectionTopicPages')({ createPage, sections }),
    createSectionLatestResourcePage: require('./createSectionLatestResourcePage')({ createPage, sections, resources }),
    createContributionPage: require('./createContributionPage')({ createPage, sections }),
  };
};
