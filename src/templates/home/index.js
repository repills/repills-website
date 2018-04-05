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
    description: 'Discover the project on <a target="_blank" href="https://github.com/repills/repills-website">GitHub</a> and <a target="_blank" href="https://repills.github.io/repills-generator/">contribute</a> by adding new amazing resources.'
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

  handleNavigateToSection = sectionId => {
    const section = this.props.pathContext.sections[sectionId];
    navigateTo(section.path);
  };

  // TODO: navigations for topics
  handleNavigateToTopic = topicId => alert('Navigate to topic: ' + topicId);

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
        <Header>
          <SimpleHeaderContent style={{paddingBottom: '32px'}}>
            <HomePageHeader
              subTitle="for web developers and UI designers"
              // title={`${data.totalResources.totalCount} Pills around the web`}
              title="Daily <strong>pills</strong> to get more <strong>skills</strong>"
            />
            <FeatureList
              features={features}
            />
          </SimpleHeaderContent>
        </Header>
        <Page>
          <SimplePageContent>
            <PageBlock
              align="CENTER"
              title='Last added'
            >
              <div>
                {
                  // TODO: navigations for topics
                  <ResourcesListWithDetail
                    breaks={{ XS: 4, SM: 6 }}
                    resources={latestSharedResources}
                    dateType={'createdAt'}
                    navigateToSection={this.handleNavigateToSection}
                    navigateToTopic={this.handleNavigateToTopic}
                  />
                }
              </div>
            </PageBlock>

            <VerticalSpacing size="large">
              <PageBlock
                align="CENTER"
                title="Learn by topic"
              >
                <SectionsList
                  navigateTo={path => navigateTo(path)}
                  sections={allSections}
                />
              </PageBlock>
            </VerticalSpacing>
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
            createdAt
            publishedAt
            type
            topics
            suggestedBy
            createdAt
            reference
          }
        }
      }
    }
  }
`;


