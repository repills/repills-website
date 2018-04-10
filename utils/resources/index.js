const config = require('repills-config');
const typesConfig = config.types;
const n = require('normalize-data');

const transformMapResource = [
  ['color', 'type', type => typesConfig[type.join('_')].color],
  ['typeLabel', 'type', type => typesConfig[type.join('_')].label.singular],
  ['publishedAt', 'publishedAt', publishedAt => (new Date(publishedAt).getFullYear() === 1970) ? null : publishedAt]
];

export function normalizeResource({ node }) {
  return n.normalize(node.frontmatter, transformMapResource, true);
}