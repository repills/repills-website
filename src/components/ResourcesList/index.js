import React from 'react';
import {
  ResourcesListWithDetail
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import paths from '../../../utils/paths';

class ResourcesList extends React.Component {

  navigateToResourceDetail = ({ slug, publishedAt }) => navigateTo(paths.getResourcePagePath({ slug, publishedAt }));

  generateDetailResourceUrl = ({ slug, publishedAt }) => paths.getResourcePagePath({ slug, publishedAt });

  navigateToSection = sectionSlug => navigateTo(`/${sectionSlug}/`);

  generateSectionUrl = sectionSlug => `/${sectionSlug}/`;

  navigateToTopic = topicPath => navigateTo(paths.getTopicPagePath({basePath: topicPath}));

  generateTopicUrl = topicPath => paths.getTopicPagePath({basePath: topicPath});

  render() {
    const {
      breaks,
      handleDetailView,
      showAllAction,
      showSimpleItems,
      resources
    } = this.props;

    return (
      <ResourcesListWithDetail
        breaks={breaks}
        resources={resources}
        dateType={'createdAt'}
        handleDetailView={handleDetailView ? handleDetailView : undefined}
        generateDetailUrl={this.generateDetailResourceUrl}
        navigateToDetail={this.navigateToResourceDetail}
        navigateToSection={this.navigateToSection}
        generateSectionUrl={this.generateSectionUrl}
        navigateToTopic={this.navigateToTopic}
        generateTopicUrl={this.generateTopicUrl}
        showAllAction={showAllAction}
        showSimpleItems={showSimpleItems || true}
      />
    )
  }
}

export default ResourcesList;