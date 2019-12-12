import React from 'react'
import {graphql, Link} from 'gatsby'

import BaseLayout from '../../components/layout/Layout'
import {normalizeResource} from '../../utils/resources'
import {getLastAddedPagePath} from '../../paths'
import TopicList from '../../components/topic-list/TopicList'
import Hero from '../../components/hero/Hero'
import PageBlock from '../../components/page-block/PageBlock'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import ResourceList from '../../components/resource-list/ResourceList'

import * as styles from './style'

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
              <WrapperElement wrapperMaxWidth={54}>
                <Hero
                  title={`Dive deep into ${sectionName} through high-quality resources`}
                  description={`
                    <strong>reactfeed.com</strong> is the place where you stay up to date
                    with the latest ${sectionName} news.<br/>
                    You can discover <strong>articles</strong>, <strong>tutorials</strong>,
                    <strong>courses</strong>, <strong>tools</strong> and <strong>books</strong>.
                  `}
                >
                  <Link
                    css={styles.action}
                    to={getLastAddedPagePath({sectionSlug})}
                  >
                    <strong css={styles.actionCount}>
                    {resourcesCount}</strong> resources available yet
                  </Link>
                </Hero>
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <WrapperElement wrapperMaxWidth={54}>
                <PageBlock title="Feed">
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
