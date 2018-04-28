import React from 'react';
import {
  TypesList,
  TopicsList,
  SectionPageHeader,
  ResourcesListWithDetail,
  PageBlock,
  ShareBar,
  Counter,
  TileCta,
  ContributorsList,
  getResourcesStats,
  VerticalSpacing
} from 'repills-react-components';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import paths from '../../../utils/paths';

import {
  Header,
  HeaderContent,
  HeaderContentMain,
  HeaderContentSecondary,
  Page,
  PageContent,
  PageContentMain,
  PageContentSecondary
} from '../../style/layout-columns';

// Components
import { normalizeResource } from '../../../utils/resources/index';

import { navigateTo } from 'gatsby-link';


class Section extends React.Component {

  static propTypes = {
    pathContext: PropTypes.shape({
      // TODO
    }),
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        totalCount: PropTypes.number.isRequired,
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                // TODO
              }),
            }),
          }).isRequired
        ),
      }),
    }),
  };

  render() {

    const {
      data,
      pathContext
    } = this.props;

    const {
      id,
      name,
      color,
      resources,
      description,
      topics,
      resourcesCount,
      topicsCount,
      maintainers,
      path,
      types,
      icon
    } = pathContext;

    const { resources:dataResources, contributors:dataContributors } = data;
    // const filledTopics = data.topics.group;
    const lastResources = dataResources.edges.map(e => normalizeResource(e));
    const contributors = dataContributors.group.map(c => ({
      nickname: c.fieldValue,
      publishedCount: c.totalCount
    }));

    const metaTitle = `${name} | Learn pill by pill and acquire more skills!`;
    const metaDescription = `Free resources about '${name}' and other hot topics. Discover everyday what's new in the web development and UI design.`;
    const shareUrl = `https://repills.com${path}`;

    return (
      <div>
        <Helmet>
          <title>{name}</title>
          <meta name="description" content={metaDescription} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={shareUrl} />
        </Helmet>
        <Header>
          <HeaderContent>
            <HeaderContentMain>
              <SectionPageHeader
                color={color}
                description={description}
                icon={icon}
                label="Section"
                title={name}
              />
            </HeaderContentMain>
            <HeaderContentSecondary>
              <div style={{borderBottom: '1px solid #e5ded7', paddingBottom: '20px'}}>
                <Counter
                  count={resourcesCount}
                  label="total pills"
                  stats={getResourcesStats(resources, true)}
                />
              </div>
              <ShareBar
                link={shareUrl}
                text={metaDescription}
                title={metaTitle}
                types={[
                  'facebook',
                  'twitter',
                  'email'
                ]}
                style={{
                  marginTop: '24px',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </HeaderContentSecondary>
          </HeaderContent>
        </Header>
        <Page>
          <PageContent>

            <PageContentMain>
              <PageBlock
                title='Last added'
                simple
              >
                <ResourcesListWithDetail
                  resources={lastResources}
                  dateType={'createdAt'}
                  generateDetailUrl={({ slug, publishedAt }) => paths.getResourcePagePath({ slug, publishedAt })}
                  navigateToDetail={({ slug, publishedAt }) => navigateTo(paths.getResourcePagePath({ slug, publishedAt }))}
                  navigateToSection={sectionSlug => navigateTo(`/${sectionSlug}`)}
                  generateSectionUrl={sectionSlug => `/${sectionSlug}`}
                  navigateToTopic={topicPath => navigateTo(paths.getTopicPagePath({basePath: topicPath}))}
                  generateTopicUrl={topicPath => paths.getTopicPagePath({basePath: topicPath})}
                />
              </PageBlock>

              <VerticalSpacing
                size="medium"
              >
                <PageBlock
                  contentsCount={topicsCount}
                  title={`Topic${topicsCount === 1 ? '' : 's'}`}
                  simple
                >
                  <TopicsList
                    breaks={{ XS: 8, SM: 16 }}
                    navigateTo={path => navigateTo(path)}
                    topics={Object.keys(topics).map(topicId => (topics[topicId]))}
                  />
                </PageBlock>
              </VerticalSpacing>
            </PageContentMain>

            <PageContentSecondary>
              <TypesList
                navigateTo={path => navigateTo(path)}
                types={types}
              />
              <VerticalSpacing size="medium">
                <TileCta
                  cta={{
                    label: 'Contribute',
                    onClick: () => window.open('https://repills.github.io/repills-generator/','_blank')
                  }}
                  description={`Contribute to enrich this section by sharing new and amazing content about "${name}"`}
                  icon="GitHub"
                  title="Let's do great things together!"
                />
              </VerticalSpacing>
              <VerticalSpacing size="medium">
                <TileCta
                  cta={{
                    label: 'Contact us',
                    onClick: () => window.location.href = `mailto:andreaman87@gmail.com?subject=${encodeURIComponent('Hi guys!')}`,
                    skin: 'outline'
                  }}
                  description="Great! Propose yourself as maintainer and help us to select high-level contents."
                  icon="User"
                  title={`Are you an expert in "${name}"?`}
                  style={{marginTop: '32px'}}
                />
              </VerticalSpacing>
              {
                /*
                 <div style={{marginTop: '32px'}}>
                 {
                 maintainers.length > 0 &&
                 <div>
                 <h3>Maintainer{maintainers.length !== 1 ? 's' : ''}</h3>
                 {
                 maintainers.map(maintainer => (
                 <div>{maintainer.name} ({maintainer.github})</div>
                 ))
                 }
                 </div>
                 }
                 </div>
                 */
              }
              <VerticalSpacing size="medium">
                <ContributorsList
                  contributors={contributors}
                />
              </VerticalSpacing>

            </PageContentSecondary>

          </PageContent>
        </Page>
      </div>
    );
  }
}

export default Section;

// Actually there is no sorting for group query in Gatsby
// https://github.com/gatsbyjs/gatsby/issues/3684

export const pageQuery = graphql`
  query TagPage($id: String) {
    resources: allMarkdownRemark(
      limit: 4
      sort: { fields: [frontmatter___createdAt], order: DESC }
      filter: { frontmatter: { sections: { in: [$id] } } }
    ) {
      edges {
        node {
          frontmatter {
            sections
            link
            title
            author
            publishedAt
            type
            topics
            suggestedBy
            createdAt
            reference,
            slug
          }
        }
      }
    }
    contributors: allMarkdownRemark(
      filter: { frontmatter: { sections: { in: [$id] } } }
    ) {
      group(field: frontmatter___suggestedBy) {
        fieldValue
        totalCount
      }
    }
  }
`;
