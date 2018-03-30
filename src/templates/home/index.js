import React from 'react';
import {
  SectionsList,
  HomePageHeader,
  ResourcesListWithDetail,
  Select,
  FeatureList,
  PageBlock
} from 'repills-react-components';
import {sections as sectionsData} from 'repills-config';

import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import {
  base,
  page,
  pageContent
} from './style';
import { normalizeResource } from '../../../utils/resources';

const BaseStyle = styled.div`${base}`;
const PageStyle = styled.div`${page}`;
const PageContentStyle = styled.div`${pageContent}`;

const features = [
  {
    icon: 'PullRequest',
    title: 'Learn pill by pill',
    description: 'Repills is a place to learn about web development and design through high-quality resources.'
  },
  {
    icon: 'Star',
    title: 'Free resources',
    description: 'The "pills" proposed are free and also grouped by section and topic. Browse them and discover what\'s new!'
  },
  {
    icon: 'GitHub',
    title: 'Open source project',
    description: 'Discover the project on <a target="_blank" href="https://github.com/repills/repills-website">GitHub</a> and <a target="_blank" href="https://repills.github.io/repills-generator/">contribute</a> by adding new amazing resources.'
  }
];

class Index extends React.Component {

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      latestSharedResources: data.latestSharedResources.edges.map(e => normalizeResource(e)),
      latestPublishedResources: data.latestPublishedResources.edges.map(e => normalizeResource(e))
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
      latestSharedResources,
      latestPublishedResources
    } = this.state;

    const {
      data,
      pathContext
    } = this.props;

    const {sections} = pathContext;

    const activeSectionKeys = Object.keys(sections);
    const activeSections = activeSectionKeys.map(sectionId => (sections[sectionId]));
    const noActiveSections = sectionsData.filter(s => !activeSectionKeys.includes(s.id)).map(s => { s.disabled = true; return s});
    const allSections = [...activeSections, ...noActiveSections];

    return (
      <BaseStyle>
        <div>
          <HomePageHeader
            subTitle="for web developers and UI designers"
            // title={`${data.totalResources.totalCount} Pills around the web`}
            title="Daily pills to acquire new skills"
          />
          <div style={{borderBottom: '1px solid #e0e0e0', padding: '0 0 40px'}}>
            <FeatureList
              features={features}
            />
          </div>
        </div>
        <PageStyle>
          <PageContentStyle>
            <PageBlock
              align="CENTER"
              title='Last added'
              style={{ marginTop: '60px' }}
            >
              <div style={{ marginTop: '40px' }}>
                {
                  // TODO: navigations for topics
                  <ResourcesListWithDetail
                    resources={latestSharedResources}
                    dateType={'createdAt'}
                    navigateToSection={this.handleNavigateToSection}
                    navigateToTopic={this.handleNavigateToTopic}
                  />
                }
              </div>
            </PageBlock>

            <PageBlock
              align="CENTER"
              title='Last by publish date'
              style={{ marginTop: '60px' }}
            >
              <div style={{ marginTop: '40px' }}>
                {
                  // TODO: navigations for topics
                  <ResourcesListWithDetail
                    resources={latestPublishedResources}
                    dateType={'publishedAt'}
                    navigateToSection={this.handleNavigateToSection}
                    navigateToTopic={this.handleNavigateToTopic}
                  />
                }
              </div>
            </PageBlock>

            <PageBlock
              align="CENTER"
              title="Learn by topic"
              style={{ marginTop: '60px' }}
            >
              <SectionsList
                navigateTo={path => navigateTo(path)}
                sections={allSections}
                style={{ marginTop: '40px' }}
              />
            </PageBlock>
          </PageContentStyle>
        </PageStyle>
      </BaseStyle>
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
      limit: 9,
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
    latestPublishedResources: allMarkdownRemark(
      limit: 9,
      sort: { order: DESC, fields: [frontmatter___publishedAt] }
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


