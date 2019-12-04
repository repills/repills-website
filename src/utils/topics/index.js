function mapTopics(topics) {
  return Object.keys(topics).map(topicId => {
    const topic = topics[topicId];
    return {
      slug: topic.slug,
      title: topic.title,
      description: topic.description,
      basePath: topic.basePath,
      totalResources: topic.resources.length,
    };
  });
}

function convertTopicsToOrderedArray(topics) {
  return topics.sort((a, b) => {
    const keyA = a.totalResources, keyB = b.totalResources;
    if(keyA > keyB) return -1;
    if(keyA < keyB) return 1;
    return 0;
  });
}

module.exports = {
  convertTopicsToOrderedArray,
  mapTopics
}
