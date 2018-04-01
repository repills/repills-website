import React from 'react';
import {
  ResourcesListWithDetail,
  ResponsivePagination,
  TypesList,
  PageBlock,
  TypePageHeader,
  ShareBar
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import { sections } from 'repills-config';
import {
  PageContent,
  HeaderContentMain,
  HeaderContent,
  HeaderContentSecondary
} from '../../style/layout-columns';

class Type extends React.Component {


  handleNavigateToSection = sectionId => {
    const section = this.props.pathContext.sections[sectionId];
    navigateTo(section.path);
  };

  // TODO: navigations for topics
  handleNavigateToTopic = topicId => alert('Navigate to topic: ' + topicId);

  render() {

    const {
      pathContext,
      transition
    } = this.props;

    const {
      sectionId,
      types,
      pagination,
      type
    } = pathContext;

    const section = sections.find(s => s.id === sectionId);

    const metaDescription = `Free ${type.label.plural} about '${section.name}' and other amazing contents. Discover everyday what's new in the web development and UI design.`;

    return (
      <div style={transition && transition.style}>
        <Helmet>
          <title>{type.label.plural} in {section.name}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={`Resources about ${section.name} grouped by type`} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={`https://repills.com${type.path}`} />
        </Helmet>
        <HeaderContent>
          <HeaderContentMain>
            <TypePageHeader
              color={type.color}
              count={pagination.totalCount}
              icon={type.label.singular}
              topicAction={() => navigateTo(section.path)}
              topicName={section.name}
              typeName={type.label}
            />
          </HeaderContentMain>
        </HeaderContent>
        <div>
          <TypesList
            navigateTo={path => navigateTo(path)}
            types={types}
            activeKey={type.id}
          />
          <ResourcesListWithDetail
            resources={type.resources.map(resource => resource.frontmatter)}
            dateType={'createdAt'}
            navigateToSection={this.handleNavigateToSection}
            navigateToTopic={this.handleNavigateToTopic}
            style={{ marginTop: '32px' }}
          />
          <ResponsivePagination
            currentPage={pagination.currentPage}
            handleNavigateToPage={page => navigateTo(`${type.path}/${page}`)}
            itemsPerPage={pagination.perPage}
            itemsTotalCount={pagination.totalCount}
            style={{ marginTop: '32px' }}
          />
        </div>
      </div>
    );
  }

}

export default Type;