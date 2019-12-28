module.exports = function({ createPage, sections, resources }) {
  return {
    createSectionTopicIndexPages: require('./createSectionTopicIndexPages')({ createPage, sections }),
    createSectionTopicPages: require('./createSectionTopicPages')({ createPage, sections }),
    createSectionLatestResourcePage: require('./createSectionLatestResourcePage')({ createPage, sections, resources }),
    createResourcePages: require('./createResourcePages')({ createPage, resources }),
    createContributionPage: require('./createContributionPage')({ createPage, sections }),
  };
};
