module.exports = {
  getResourcePagePath: ({slug, publishedAt}) => {
    const _publishedAtDate = publishedAt ? new Date(publishedAt) : null;
    return (_publishedAtDate && _publishedAtDate.getFullYear() !== 1970) ? `/r/${_publishedAtDate.getFullYear()}/${slug}` : `/r/${slug}`
  }
};
