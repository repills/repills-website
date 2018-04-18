import React from 'react';
import {
  SectionsList,
  HomePageHeader,
  ResourcesListWithDetail,
  Select,
  FeatureList,
  PageBlock,
  VerticalSpacing
} from 'repills-react-components';
import {sections as sectionsData} from 'repills-config';
import { navigateTo } from 'gatsby-link';
import { normalizeResource } from '../../../utils/resources';
import paths from '../../../utils/paths';
import { Seo } from '../../components';

import {
  Header,
  SimpleHeaderContent,
  Page,
  SimplePageContent
} from '../../style/layout-columns';

const features = [
  {
    icon: 'SquarePill',
    title: 'Learn pill by pill',
    description: 'Repills is a place to learn about web development and design through high-quality resources.'
  },
  {
    icon: 'Star',
    title: 'Free resources',
    description: 'The "pills" proposed are free and also grouped by section and topic. Browse them and discover what\'s new!'
  },
  {
    icon: 'PullRequest',
    title: 'Open source project',
    description: 'Discover the project on <a target="_blank" rel="nofollow" href="https://github.com/repills/repills-website">GitHub</a> and <a target="_blank" rel="nofollow" href="https://repills.github.io/repills-generator/">contribute</a> by adding new amazing resources.'
  }
];

/*
const carouselSettings = {
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2.25,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.25
      }
    }
  ]
};
*/

class Index extends React.Component {

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      latestSharedResources: data.latestSharedResources.edges.map(e => normalizeResource(e))
    }
  }

  navigateToLastAdded = () => navigateTo(paths.getLastAddedPagePath());

  render() {

    const {
      latestSharedResources
    } = this.state;

    const {
      data,
      pathContext
    } = this.props;

    const {sections} = pathContext;

    const activeSectionKeys = Object.keys(sections);
    const activeSections = activeSectionKeys.map(sectionId => (sections[sectionId]));
    const noActiveSections = sectionsData.filter(s => !activeSectionKeys.includes(s.id)).map(s => {
      s.disabled = true;
      s.resourcesCount = 0;
      s.topicsCount = 0;
      return s
    });
    const allSections = [...activeSections, ...noActiveSections];

    return (
      <div>
        <Seo />
        <Header style={{backgroundColor: '#2a2a2a'}}>
          <SimpleHeaderContent style={{paddingBottom: '60px'}}>
            <HomePageHeader
              subTitle="for web developers and UI designers"
              title="Free <strong>pills</strong> to get more <strong>skills</strong>"
            />
            <FeatureList
              features={features}
              skin="dark"
              style={{borderTop: '1px solid rgba(102,102,102,0.4)', paddingTop: '32px'}}
            />
          </SimpleHeaderContent>
        </Header>
        <Page
          style={{backgroundColor: '#f9f8f6'}}
        >
          <SimplePageContent
          >
            <PageBlock
              align="CENTER"
              title="Learn by topic"
              simple
            >
              <SectionsList
                navigateTo={path => navigateTo(path)}
                sections={allSections}
                // settings={carouselSettings}
              />
            </PageBlock>
          </SimplePageContent>
        </Page>
        <Page>
          <SimplePageContent>
            <PageBlock
              align="CENTER"
              title='Last added Pills'
              simple
            >
              {
                <ResourcesListWithDetail
                  breaks={{ XS: 4, SM: 6 }}
                  resources={latestSharedResources}
                  dateType={'createdAt'}
                  generateDetailUrl={({ slug, publishedAt }) => paths.getResourcePagePath({ slug, publishedAt })}
                  navigateToDetail={({ slug, publishedAt }) => navigateTo(paths.getResourcePagePath({ slug, publishedAt }))}
                  navigateToSection={sectionSlug => navigateTo(`/${sectionSlug}`)}
                  generateSectionUrl={sectionSlug => `/${sectionSlug}`}
                  navigateToTopic={topicPath => navigateTo(paths.getTopicPagePath({basePath: topicPath}))}
                  generateTopicUrl={topicPath => paths.getTopicPagePath({basePath: topicPath})}
                  showAllAction={{
                    onClick: this.navigateToLastAdded
                  }}
                />
              }
            </PageBlock>
          </SimplePageContent>
        </Page>
      </div>
    );
  }
};

export default Index;

// TODO: use fragment

export const pageQuery = graphql`
  query IndexQuery {
    totalResources: allMarkdownRemark{
      totalCount
    }
    latestSharedResources: allMarkdownRemark(
      limit: 12,
      sort: { order: DESC, fields: [frontmatter___createdAt] }
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
            reference
            slug
          }
        }
      }
    }
  }
`;


