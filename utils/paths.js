module.exports = {
  getResourcePagePath: ({slug, publishedAt}) => {
    const _publishedAtDate = publishedAt ? new Date(publishedAt) : null;
    return (_publishedAtDate && _publishedAtDate.getFullYear() !== 1970) ? `/r/${_publishedAtDate.getFullYear()}/${slug}/` : `/r/${slug}/`
  },
  getLastAddedPagePath: index => {
    return (index && index !== 1) ? `/last-added/${index}/` : `/last-added/`;
  },
  getTopicPagePath: ({index, basePath}) => {
    return (index && index !== 1) ? `${basePath}${index}/` : `${basePath}`;
  },
  getTypePagePath: ({index, basePath}) => {
    return (index && index !== 1) ? `${basePath}${index}/` : `${basePath}`;
  }
};
