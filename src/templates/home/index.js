import React from 'react';
import {
  SectionsList,
  HomePageHeader,
  Select,
  FeatureList,
  PageBlock,
  VerticalSpacing,
  theme
} from 'repills-react-components';
import config from '../../../config';
const { neutral } = theme.palettes;
import {sections as sectionsData} from 'repills-config';
import { navigateTo } from 'gatsby-link';
import { normalizeResource } from '../../../utils/resources';
import paths from '../../../utils/paths';
import { Seo, ResourcesList } from '../../components';
import ReactGA from 'react-ga';
ReactGA.initialize(config.ga.trackingId);

import {
  Header,
  SimpleHeaderContent,
  Page,
  SimplePageContent
} from '../../style/layout-columns';

const features = [
  {
    icon: 'SquarePill',
    title: 'Learn pill-by-pill',
    description: 'Thanks to the daily web resources, you can get the training you need from experts improving your skills day by day, pill-by-pill!'
  },
  {
    icon: 'Star',
    title: 'Stay up-to-date',
    description: 'There are number of technologies that are used to develop websites and web applications. Repills helps you to stay up-to-date with the cutting-edge technologies!'
  },
  {
    icon: 'PullRequest',
    title: 'Open source project',
    description: 'Discover and support the project on <a target="_blank" rel="nofollow" href="https://github.com/repills/repills-website">GitHub</a> and <a target="_blank" rel="nofollow" href="https://repills.github.io/repills-generator/">contribute</a> by adding new amazing resources.'
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

  navigateToLastAdded = () => navigateTo(paths.getLastAddedPagePath());

  handleDetailView = ({ resource }) => {
    ReactGA.event({
      category: 'Resource browsing',
      action: 'See resource detail (Home)',
      label: 'Resource modal detail'
    });
  };

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
        <Header style={{backgroundColor: neutral.highest}}>
          <SimpleHeaderContent>
            <HomePageHeader
              subTitle="for web developers and UI designers"
              title="Free <strong>pills</strong> to get more <strong>skills</strong>"
              description="Repills is going to be the place to learn about web development and design through well-organized high-quality resources."
            />
          </SimpleHeaderContent>
        </Header>
        <Page>
          <SimplePageContent>
            <VerticalSpacing
              size="large"
            >
              <PageBlock
                align="CENTER"
                title="Learn by topic"
                description="Explore our sections and get the resources you need from industry experts."
                simple
              >
                <SectionsList
                  navigateTo={path => navigateTo(path)}
                  sections={allSections}
                  // settings={carouselSettings}
                />
              </PageBlock>
            </VerticalSpacing>
            <VerticalSpacing
              size="large"
            >
              <PageBlock
                align="CENTER"
                title='Last added Pills'
                simple
                description="Get the latest news, tutorials, tips, and guides on software and UI development."
                style={{borderTop: `1px solid ${neutral.low}`, paddingTop: '52px'}}
              >
                {
                  <ResourcesList
                    breaks={{ XS: 4, SM: 6 }}
                    handleDetailView={this.handleDetailView}
                    resources={latestSharedResources}
                    showAllAction={{
                      onClick: this.navigateToLastAdded,
                      href: paths.getLastAddedPagePath()
                    }}
                  />
                }
              </PageBlock>
            </VerticalSpacing>
            <VerticalSpacing
              size="large"
            >
              <FeatureList
                style={{borderTop: `1px solid ${neutral.low}`, paddingTop: '32px'}}
                features={features}
              />
            </VerticalSpacing>
          </SimplePageContent>
        </Page>
      </div>
    );
  }
}

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
            abstract
          }
        }
      }
    }
  }
`;


