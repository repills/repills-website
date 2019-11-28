const typesConfig = require('../../config/types');
const n = require('normalize-data');

const transformMapResource = [
  ['rawTypes', 'type'],
  ['link', 'link', link => `${link}?utm_campaign=reactfeed&utm_medium=website&utm_source=reactfeed.com`],
  ['color', 'type', type => typesConfig[type.join('_')].color],
  ['typeLabel', 'type', type => typesConfig[type.join('_')].label.singular],
  ['publishedAt', 'publishedAt', publishedAt => (new Date(publishedAt).getFullYear() === 1970) ? null : publishedAt]
];

function normalizeResource({ node }) {
  return n.normalize(node.frontmatter, transformMapResource, true);
}

module.exports = {
  normalizeResource
}
