const sectionId = 'reactjs'

module.exports = {
  id: sectionId,
  slug: sectionId,
  name: 'React.js',
  icon: 'ReactIcon',
  color: '#53c1de',
  basePath: '/reactjs/',
  description: 'Dive deep into React, one of the most powerful JavaScript library for building interactive user interfaces.',
  maintainers: [
    {
      name: 'Andrea Mangano',
      github: 'andreamangano'
    }
  ],
  destinationDirName: sectionId,
  topics: require('./topics')(sectionId)
}
