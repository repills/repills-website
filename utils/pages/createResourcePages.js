const path = require('path');
const slugify = require('slugify')

module.exports = ({ createPage, resources }) => () =>
  resources.map(resource => {
      console.log(resource)

      const {
        reference,
        slug,
        publishedAt
      } = resource.node.frontmatter;

      let _slug = slug;

      if (publishedAt) {
        const year = new Date(publishedAt).getFullYear();
        _slug = `${year}/${slug}`
      }

      console.log(_slug)

    createPage({
        path: `r/${_slug}`,
        component: path.resolve(`src/templates/resource/index.js`),
        context: {
          reference,
          resource
        }
      })
    }
  );
