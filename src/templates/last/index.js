import React from 'react';
import Helmet from 'react-helmet';
import {
  ResponsivePagination,
  PageBlock,
  SimplePageHeader,
  VerticalSpacing
} from 'repills-react-components';
import { navigateTo } from 'gatsby-link';
import { sections } from 'repills-config';
import paths from '../../../utils/paths';
import config from '../../../config';
import { ResourcesList } from '../../components';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-117143286-1');

import {
  HeaderContent,
  HeaderContentMain,
  Header,
  Page,
  SimplePageContent
} from '../../style/layout-columns';
import { normalizeResource } from '../../../utils/resources';

class Last extends React.Component {

  handleDetailView = ({ resource }) => {
    ReactGA.event({
      category: 'Resource browsing',
      action: 'See resource detail (Last added)',
      label: 'Resource modal detail'
    });
  };

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
          <meta property="og:url" content={`${config.baseUrl}${paths.getLastAddedPagePath(pagination.currentPage)}`} />
        </Helmet>
        <Header>
          <HeaderContent>
            <HeaderContentMain>
              <SimplePageHeader
                title="Last added pills"
              />
            </HeaderContentMain>
          </HeaderContent>
        </Header>
        <Page>
          <SimplePageContent>
            <VerticalSpacing size="medium">
              <ResourcesList
                resources={resources.map(e => normalizeResource(e))}
                handleDetailView={this.handleDetailView}
              />
            </VerticalSpacing>
            <VerticalSpacing size="small">
              <ResponsivePagination
                currentPage={pagination.currentPage}
                handleNavigateToPage={page => navigateTo(paths.getLastAddedPagePath(page))}
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