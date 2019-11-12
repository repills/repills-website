module.exports = function ({ topics, sectionId }) {
  const _topics = {}
  Object.keys(topics).forEach(topicName => {
    _topics[topicName] = Object.assign(topics[topicName], { slug: `${sectionId}-${topics[topicName].slug}` })
  })
  return _topics
}
