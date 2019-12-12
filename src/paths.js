module.exports = {
  getResourcePagePath: ({slug, publishedAt}) => {
    const _publishedAtDate = publishedAt ? new Date(publishedAt) : null;
    return (_publishedAtDate && _publishedAtDate.getFullYear() !== 1970) ? `/r/${_publishedAtDate.getFullYear()}/${slug}/` : `/r/${slug}/`
  },
  getTopicPagePath: ({index, topicSlug}) => {
    return `/${topicSlug}/${(index && index !== 1) ? index : ''}`;
  },
  getTopicsIndexPagePath: (sectionSlug) => {
    return `/${sectionSlug}/topics`;
  },
  getLastAddedPagePath: ({index, sectionSlug, anchor}) => {
    if(!index) {
      return '/';
    }

    return `/${sectionSlug}/latest-resources/${(index !== 1) ? `${index}/` : ''}${anchor && `#${anchor}`}`;
  },
};
