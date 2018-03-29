const config = require('repills-config');
const typesConfig = config.types;

export function normalizeResource({ node }) {
  node.frontmatter.color = typesConfig[node.frontmatter.type.join('_')].color;
  node.frontmatter.typeLabel = typesConfig[node.frontmatter.type.join('_')].label.singular;
  return node.frontmatter;
}