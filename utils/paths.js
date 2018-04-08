module.exports = {
  getResourcePagePath: ({slug, publishedAt}) => publishedAt ? `/r/${new Date(publishedAt).getFullYear()}/${slug}` : `/r/${slug}`
};
