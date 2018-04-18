import React from 'react';
import Helmet from 'react-helmet';
import {
  ResourcesListWithDetail,
  ResponsivePagination,
  PageBlock,
  SimplePageHeader,
  VerticalSpacing
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import { sections } from 'repills-config';
import paths from '../../../utils/paths';
import config from '../../../config';

import {
  HeaderContent,
  HeaderContentMain,
  SimpleHeader,
  Page,
  SimplePageContent
} from '../../style/layout-columns';
import { normalizeResource } from '../../../utils/resources';

class Last extends React.Component {


  render() {

    const {
      pathContext
    } = this.props;

    const {
      resources,
      pagination,
      sections
    } = pathContext;

    const metaTitle = 'Last added resource';

    return (
      <div>
        <Helmet>
          <title>{metaTitle}</title>
          <meta property="og:title" content={`${metaTitle} - Repills.com`} />
          <meta property="og:url" content={`${config.baseUrl}/${paths.getLastAddedPagePath(pagination.currentPage)}`} />
        </Helmet>
        <SimpleHeader>
          <HeaderContent>
            <HeaderContentMain>
              <SimplePageHeader
                title="Last added pills"
              />
            </HeaderContentMain>
          </HeaderContent>
        </SimpleHeader>
        <Page>
          <SimplePageContent style={{paddingTop: 0}}>
            <ResourcesListWithDetail
              resources={resources.map(e => normalizeResource(e))}
              dateType={'createdAt'}
              generateDetailUrl={({ slug, publishedAt }) => paths.getResourcePagePath({ slug, publishedAt })}
              navigateToDetail={({ slug, publishedAt }) => navigateTo(paths.getResourcePagePath({ slug, publishedAt }))}
              navigateToSection={sectionSlug => navigateTo(`/${sectionSlug}`)}
              navigateToTopic={topicSlug => navigateTo(`/${topicSlug}`)}
              generateTopicUrl={topicSlug => `/${topicSlug}`}
              generateSectionUrl={sectionSlug => `/${sectionSlug}`}
            />
            <VerticalSpacing size="medium">
              <ResponsivePagination
                currentPage={pagination.currentPage}
                handleNavigateToPage={page => navigateTo(`/last-added/${page}`)}
                itemsPerPage={pagination.perPage}
                itemsTotalCount={pagination.totalCount}
                buildPagePath={paths.getLastAddedPagePath}
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
      </div>
    );
  }
}
export default Last;