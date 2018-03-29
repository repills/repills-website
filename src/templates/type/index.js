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
      sectionId,
      types,
      pagination,
      type
    } = this.props.pathContext;

    const section = sections.find(s => s.id === sectionId);

    return (
      <div>
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
          <HeaderContentSecondary>
            <ShareBar
              link="http://repills.com"
              text="Learn pill by pill on repills.com"
              title="Pills around the web for web developers and UI designers"
              types={[
                'facebook',
                'google',
                'linkedin',
                'twitter',
                'email'
              ]}
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            />
          </HeaderContentSecondary>
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