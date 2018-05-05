import React from 'react';
import {
  TypesList,
  TopicsList,
  SectionPageHeader,
  PageBlock,
  ShareBar,
  Counter,
  TileCta,
  ContributorsList,
  getResourcesStats,
  VerticalSpacing,
  theme
} from 'repills-react-components';
const { neutral } = theme.palettes;
import { ResourcesList } from '../../components';
import Helmet from 'react-helmet';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import config from '../../../config';
ReactGA.initialize(config.ga.trackingId);

import {
  Header,
  HeaderContent,
  HeaderContentMain,
  HeaderContentSecondary,
  Page,
  SimplePageContent,
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

  handleDetailView = ({ resource }) => {
    ReactGA.event({
      category: 'Resource browsing',
      action: 'See resource detail (Section)',
      label: 'Resource modal detail'
    });
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
      // maintainers,
      path,
      types,
      icon
    } = pathContext;

    const { resources:dataResources, contributors:dataContributors } = data;
    // const filledTopics = data.topics.group;
    const lastResources = dataResources.edges.map(e => normalizeResource(e));

    /*
    const contributors = dataContributors.group.map(c => ({
      nickname: c.fieldValue,
      publishedCount: c.totalCount
    }));
    */

    const metaTitle = `${name} | Free pills and get more skills!`;
    const metaDescription = `Free resources about '${name}' and other hot topics. Discover everyday what's new in the web development and UI design.`;
    const shareUrl = `${config.baseUrl}${path}`;

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
              <div style={{borderBottom: `1px solid ${rgba(neutral.highest,.3)}`, paddingBottom: '1.25rem'}}>
                <Counter
                  count={resourcesCount}
                  label="total pills"
                  showStats={false}
                />
              </div>
              <ShareBar
                color={neutral.lowest}
                link={shareUrl}
                text={metaDescription}
                title={metaTitle}
                types={[
                  'facebook',
                  'twitter',
                  'linkedin'
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
        <Page style={{backgroundColor: neutral.lower, paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
          <SimplePageContent>
            <PageBlock
              title='Last added resources'
              simple
            >
              <ResourcesList
                handleDetailView={this.handleDetailView}
                resources={lastResources}
              />
            </PageBlock>
          </SimplePageContent>
        </Page>
        <Page>
          <SimplePageContent>
            <VerticalSpacing size="medium">
              <PageBlock
                contentsCount={topicsCount}
                title={`Topic${topicsCount === 1 ? '' : 's'}`}
                simple
                description={`Deep dive into the ${name} available topics`}
              >
                {
                  topics.length > 3 &&
                  <div>
                    <TopicsList
                      type="extended"
                      breaks={{ XS: 8, SM: 16 }}
                      navigateTo={path => navigateTo(path)}
                      topics={topics.slice(0,3)}
                    />
                    <TopicsList
                      style={{marginTop: '1rem'}}
                      breaks={{ XS: 8, SM: 16 }}
                      navigateTo={path => navigateTo(path)}
                      topics={topics.slice(3,topics.length)}
                    />
                  </div>
                }
                {
                  topics.length <= 3 &&
                  <TopicsList
                    breaks={{ XS: 8, SM: 16 }}
                    navigateTo={path => navigateTo(path)}
                    topics={topics}
                  />
                }

              </PageBlock>
            </VerticalSpacing>
            <VerticalSpacing size="large">
              <TypesList
                navigateTo={path => navigateTo(path)}
                types={types}
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
        {
          /*
           <TileCta
           cta={{
           label: 'Contribute',
           onClick: () => window.open('https://repills.github.io/repills-generator/','_blank')
           }}
           description={`Contribute to enrich this section by sharing new and amazing content about "${name}"`}
           icon="GitHub"
           title="Let's do great things together!"
           />
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
           <VerticalSpacing size="medium">
           <ContributorsList
           contributors={contributors}
           />
           </VerticalSpacing>
           */
        }
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
      limit: 6
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
            slug,
            abstract
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
