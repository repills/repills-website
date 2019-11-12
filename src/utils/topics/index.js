function convertTopicsToOrderedArray(topics) {
  const _topics = Object.keys(topics).map(topicId => (topics[topicId]));
  return _topics.sort((a, b) => {
    const keyA = a.resources.length, keyB = b.resources.length;
    if(keyA > keyB) return -1;
    if(keyA < keyB) return 1;
    return 0;
  });
}
  
module.exports = {
  convertTopicsToOrderedArray
}