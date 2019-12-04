import React from 'react'
import {graphql} from 'gatsby'

import BaseLayout from '../../components/layout/Layout'
import {normalizeResource} from '../../utils/resources'
import {getLastAddedPagePath} from '../../paths'
import TopicList from '../../components/topic-list/TopicList'
import Hero from '../../components/hero/Hero'
import PageBlock from '../../components/page-block/PageBlock'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import ResourceList from '../../components/resource-list/ResourceList'

const DISPLAYED_TOPICS = 9;

const SectionPage = ({
  data,
  pageContext,
}) => {
  const latestSharedResources = data.latestSharedResources.edges.map(normalizeResource)
  const {
    sectionSlug,
    sectionName,
    resourcesCount,
    topicsList,
  } = pageContext

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <PageSection
              backgroundColor="primary.basic"
            >
              <WrapperElement>
                <Hero
                  title={
                    `Dive deep into ${sectionName} through high-quality resources`
                  }
                  description={`
                    reactfeed.com is the place where you stay up to date with the latest ${sectionName} news. You can discover articles, tutorials, courses, tools and books.
                  `}
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <WrapperElement>
                <PageBlock
                  caption={`${resourcesCount} available resources about ${sectionName}`}
                >
                  <ResourceList
                    resources={latestSharedResources}
                    seeMore={getLastAddedPagePath({index: 2, sectionSlug})}
                  />
                </PageBlock>
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection
              backgroundColor="neutrals.light"
            >
              <WrapperElement>
                <PageBlock
                  title={`${topicsList.length} topics about ${sectionName}`}
                >
                  <TopicList
                    topics={topicsList}
                    limit={DISPLAYED_TOPICS}
                  />
                </PageBlock>
              </WrapperElement>
            </PageSection>
          </>
        )
      }
    </BaseLayout>
  )
}

export default SectionPage;

export const sectionPageQuery = graphql`
  query sectionPageQuery($sectionSlug: String!, $limit: Int!) {
    latestSharedResources: allMarkdownRemark(
      limit: $limit,
      sort: { order: DESC, fields: [frontmatter___createdAt] }
      filter: { frontmatter: { sections: { in: [$sectionSlug] } } }
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
