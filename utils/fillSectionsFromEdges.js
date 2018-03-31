const config = require('repills-config');
const sectionsConfig = config.sections;
const typesConfig = config.types;

module.exports = edges => {

  const data = {};

  edges
    .forEach(({ node }) => {

      if (node.frontmatter.sections) {

        node.frontmatter.sections.forEach(section => {

          const sectionIndex = sectionsConfig.findIndex(e => e.id === section);
          let ok = false;

          if (!data[section]) {
            const sectionConfig = sectionsConfig[sectionIndex];
            data[section] = Object.assign(
              {},
              sectionConfig,
              { resources: [], topics: {}, types: {}, path: `/${sectionConfig.id}` }
            );
          }

          node.frontmatter.topics.forEach(topic => {

            const topicConfig = sectionsConfig[sectionIndex].topics[topic];

            if (topicConfig) {

              ok = true;

              if (!data[section].topics[topic]) {
                data[section].topics[topic] = Object.assign(
                  {},
                  topicConfig,
                  { resources: [], path: `/${topicConfig.slug}` }
                );
              }

              data[section].topics[topic].resources.push(node);
            }
          });

          node.frontmatter.type.forEach(type => {

            const typeConfig = typesConfig[type];

            if (typeConfig) {
              if (!data[section].types[type]) {
                data[section].types[type] = Object.assign(
                  {},
                  typeConfig,
                  { resources: [], path: `/${section}-${type}` }
                );
              }

              node.frontmatter.color = typesConfig[node.frontmatter.type.join('_')].color;
              node.frontmatter.typeLabel = typesConfig[node.frontmatter.type.join('_')].label.singular;
              data[section].types[type].resources.push(node);
            }
          });

          // Insert the node in the section only if the topic is among the section topics
          if (ok) {
            data[section].resources.push(node);
          }

          data[section].resourcesCount = data[section].resources.length;
          data[section].topicsCount = Object.keys(data[section].topics).length;
        });
      }
    });

  return data;
};
