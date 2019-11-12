const config = require('../config');
const sectionsConfig = config.sections;
const typesConfig = config.types;

module.exports = edges => {

  const data = {};

  edges
    .forEach((resource) => {

      if (resource.sections) {

        resource.sections.forEach(section => {

          const sectionIndex = sectionsConfig.findIndex(e => e.id === section);
          let ok = false;

          const sectionConfig = sectionsConfig[sectionIndex];

          if (!data[section]) {
            data[section] = Object.assign(
              {},
              sectionConfig,
              { resources: [], topics: {}, types: {}, basePath: sectionConfig.basePath }
            );
          }

          resource.topics.forEach(topic => {

            const topicConfig = sectionConfig.topics[topic];

            if (topicConfig) {

              ok = true;

              if (!data[section].topics[topic]) {
                data[section].topics[topic] = Object.assign(
                  {},
                  topicConfig,
                  {
                    resources: [],
                    basePath: `/${topicConfig.slug}/`,
                    sectionIcon: data[section].icon
                  }
                )
              }

              data[section].topics[topic].resources.push(resource);
            }
          });

          resource.rawTypes.forEach(type => {

            const typeConfig = typesConfig[type];

            if (typeConfig) {
              if (!data[section].types[type]) {
                data[section].types[type] = Object.assign(
                  {},
                  typeConfig,
                  { resources: [], basePath: `/${section}-${type}/` }
                );
              }

              data[section].types[type].resources.push(resource);
            }
          });

          // Insert the node in the section only if the topic is among the section topics
          if (ok) {
            data[section].resources.push(resource);
          }

          data[section].resourcesCount = data[section].resources.length;
          data[section].topicsCount = Object.keys(data[section].topics).length;
        });
      }
    });

  return data;
};
