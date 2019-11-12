module.exports = {
  getTopicPagePath: ({index, topicSlug}) => {
    return `/${topicSlug}/${(index && index !== 1) ? index : ''}`;
  },
  getTopicsIndexPagePath: (sectionSlug) => {
    return `/${sectionSlug}/topics`;
  },
  getLastAddedPagePath: ({index, sectionSlug}) => {
    return `/${sectionSlug}/latest-resources/${(index && index !== 1) ? `${index}/` : ''}`;
  },
};
