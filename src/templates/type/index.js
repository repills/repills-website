import React from 'react';
import {
  ResourcesListWithDetail,
  ResponsivePagination,
  TypesList,
  PageBlock,
  TypePageHeader,
  ShareBar,
  VerticalSpacing
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import paths from '../../../utils/paths';
import Helmet from 'react-helmet';
import { sections } from 'repills-config';
import {
  SimpleHeader,
  HeaderContentMain,
  HeaderContent,
  Page,
  SimplePageContent
} from '../../style/layout-columns';

class Type extends React.Component {

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
        <SimpleHeader>
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
        </SimpleHeader>
        <Page>
          <SimplePageContent style={{paddingTop: 0}}>
            <TypesList
              navigateTo={path => navigateTo(path)}
              types={types}
              activeKey={type.id}
            />
            <VerticalSpacing size="medium">
              <ResourcesListWithDetail
                resources={type.resources.map(resource => resource.frontmatter)}
                dateType={'createdAt'}
                generateDetailUrl={({ slug, publishedAt }) => paths.getResourcePagePath({ slug, publishedAt })}
                navigateToDetail={({ slug, publishedAt }) => navigateTo(paths.getResourcePagePath({ slug, publishedAt }))}
                navigateToSection={sectionSlug => navigateTo(`/${sectionSlug}`)}
                navigateToTopic={topicSlug => navigateTo(`/${topicSlug}`)}
                generateTopicUrl={topicSlug => `/${topicSlug}`}
                generateSectionUrl={sectionSlug => `/${sectionSlug}`}
              />
            </VerticalSpacing>
            <VerticalSpacing size="medium">
              <ResponsivePagination
                currentPage={pagination.currentPage}
                handleNavigateToPage={page => navigateTo(`${type.path}/${page}`)}
                itemsPerPage={pagination.perPage}
                itemsTotalCount={pagination.totalCount}
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
      </div>
    );
  }

}

export default Type;