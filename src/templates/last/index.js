import React from 'react';
import Helmet from 'react-helmet';
import {
  ResponsivePagination,
  SimplePageHeader,
  VerticalSpacing
} from 'repills-react-components'
import { push } from 'gatsby'
import paths from '../../../utils/paths'
import Layout from '../../components/Layout'
import ResourcesList from '../../components/wrappers/ResourcesList'
import ReactGA from 'react-ga'
import {
  HeaderContent,
  HeaderContentMain,
  Header,
  Page,
  SimplePageContent
} from '../../style/layout-columns'
import { normalizeResource } from '../../../utils/resources'
import config from '../../../config'

ReactGA.initialize('UA-117143286-1');

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
      pageContext,
    } = this.props;

    const {
      resources,
      pagination,
    } = pageContext;

    const metaTitle = 'Last added resources';

    return (
      <Layout>
        <Helmet>
          <title>{ metaTitle }</title>
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
            <VerticalSpacing size="medium">
              <ResponsivePagination
                currentPage={pagination.currentPage}
                handleNavigateToPage={page => push(paths.getLastAddedPagePath(page))}
                itemsPerPage={pagination.perPage}
                itemsTotalCount={pagination.totalCount}
                buildPagePath={paths.getLastAddedPagePath}
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
      </Layout>
    );
  }
}
export default Last;