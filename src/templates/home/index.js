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

class Index extends React.Component {

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      latestSharedResources: data.latestSharedResources.edges.map(e => normalizeResource(e))
    }
  }

  render() {

    const {
      latestSharedResources
    } = this.state;

    const {
      data,
      pathContext,
      transition
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
      <div style={transition && transition.style}>
        <Seo />
        <Header style={{backgroundColor: 'transparent'}}>
          <SimpleHeaderContent style={{paddingBottom: '60px'}}>
            <HomePageHeader
              subTitle="for web developers and UI designers"
              title="Daily <strong>pills</strong> to get more <strong>skills</strong>"
            />
            <FeatureList
              features={features}
              style={{borderTop: '1px solid #e5ded7', paddingTop: '32px'}}
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
                  navigateToTopic={topicSlug => navigateTo(`/${topicSlug}`)}
                  generateTopicUrl={topicSlug => `/${topicSlug}`}
                  generateSectionUrl={sectionSlug => `/${sectionSlug}`}
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


