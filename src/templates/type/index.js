import React from 'react';
import {
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
import { ResourcesList } from '../../components';
import ReactGA from 'react-ga';
import config from '../../../config';
ReactGA.initialize(config.ga.trackingId);

import {
  Header,
  HeaderContentMain,
  HeaderContent,
  Page,
  SimplePageContent
} from '../../style/layout-columns';

class Type extends React.Component {

  handleDetailView = ({ resource }) => {
    ReactGA.event({
      category: 'Resource browsing',
      action: 'See resource detail (Type)',
      label: 'Resource modal detail'
    });
  };

  navigateToPage = index => navigateTo(paths.getTypePagePath({index, basePath: this.props.pathContext.type.path}));

  buildNavigationToPagePath = index => paths.getTypePagePath({index, basePath: this.props.pathContext.type.path});

  render() {

    const {
      pathContext
    } = this.props;

    const {
      sectionId,
      types,
      pagination,
      type
    } = pathContext;

    const section = sections.find(s => s.id === sectionId);

    const metaTitle = `${type.label.plural} in ${section.name}`;
    const metaDescription = `Free ${type.label.plural} about '${section.name}' and other amazing contents. Discover everyday what's new in the web development and UI design.`;

    return (
      <div>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={`Resources about ${section.name} grouped by type`} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={`${config.baseUrl}${type.path}`} />
        </Helmet>
        <Header>
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
        </Header>
        <Page>
          <SimplePageContent>
            <VerticalSpacing size="medium">
              <ResourcesList
                handleDetailView={this.handleDetailView}
                resources={type.resources.map(resource => resource.frontmatter)}
              />
            </VerticalSpacing>
            <VerticalSpacing size="small">
              <ResponsivePagination
                currentPage={pagination.currentPage}
                handleNavigateToPage={this.navigateToPage}
                itemsPerPage={pagination.perPage}
                itemsTotalCount={pagination.totalCount}
                buildPagePath={this.buildNavigationToPagePath}
              />
            </VerticalSpacing>
            <VerticalSpacing size="medium">
              <TypesList
                navigateTo={path => navigateTo(path)}
                types={types}
                activeKey={type.id}
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
      </div>
    );
  }
}

export default Type;