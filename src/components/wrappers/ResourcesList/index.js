import React from 'react'
import { ResourcesListWithDetail } from 'repills-react-components'
import { push } from 'gatsby'
import paths from '../../../../utils/paths'

const navigateToResourceDetail = ({ slug, publishedAt }) => push(paths.getResourcePagePath({ slug, publishedAt }));
const generateDetailResourceUrl = ({ slug, publishedAt }) => paths.getResourcePagePath({ slug, publishedAt });
const navigateToSection = sectionSlug => push(`/${sectionSlug}/`);
const generateSectionUrl = sectionSlug => `/${sectionSlug}/`;
const navigateToTopic = topicPath => push(paths.getTopicPagePath({basePath: `/${topicPath}/`}));
const generateTopicUrl = topicPath => paths.getTopicPagePath({basePath: topicPath});

const ResourcesList = ({
  breaks,
  handleDetailView,
  showAllAction,
  showSimpleItems,
  resources,
}) => (
  <ResourcesListWithDetail
    breaks={breaks}
    resources={resources}
    dateType={'createdAt'}
    handleDetailView={handleDetailView}
    generateDetailUrl={generateDetailResourceUrl}
    navigateToDetail={navigateToResourceDetail}
    navigateToSection={navigateToSection}
    generateSectionUrl={generateSectionUrl}
    navigateToTopic={navigateToTopic}
    generateTopicUrl={generateTopicUrl}
    showAllAction={showAllAction}
    showSimpleItems={showSimpleItems || true}
  />
);

export default ResourcesList;