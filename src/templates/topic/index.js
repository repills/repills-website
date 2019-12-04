import React from 'react'
import {navigate} from 'gatsby'
import {graphql} from 'gatsby'

import {normalizeResource} from '../../utils/resources'
import {getTopicPagePath} from '../../paths'
import BaseLayout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import ResourceList from '../../components/resource-list/ResourceList'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import PageBlock from '../../components/page-block/PageBlock'
import TopicSelect from '../../components/topics-select/TopicSelect'

import * as styles from './style'

const TopicPage = ({
  pageContext,
  data
}) => {
  const {
    topicSlug,
    topicTitle,
    topicDescription,
    pagination,
    topicsList
  } = pageContext

  const currentTopic = topicsList[topicSlug]
  const topicResources = data.topicResources.edges.map(normalizeResource)

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
                  title={`Topic: ${topicTitle}`}
                  description={topicDescription}
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <div css={styles.actionBar}>
              {
                <TopicSelect
                  topics={topicsList}
                  current={topicSlug}
                  placement="bottomCenter"
                />
              }
            </div>
            <Divider />
            <PageSection>
              <WrapperElement>
                <PageBlock
                  caption={`
                    ${pagination.totalCount} resources available
                    ${pagination.currentPage > 1 ? `- Page ${pagination.currentPage}` : ''}
                  `}
                >
                  <ResourceList
                    resources={topicResources}
                    pagination={pagination}
                    navigateTo={(page) => navigate(getTopicPagePath({index: page, topicSlug: topicSlug}))}
                  />
                </PageBlock>
              </WrapperElement>
            </PageSection>
            <PageSection>
              <WrapperElement>
                {
                  currentTopic && currentTopic.similar && currentTopic.similar.length > 0 && (
                    <p css={styles.similar}>
                      {currentTopic.similar.join(' / ')}
                    </p>
                  )
                }
              </WrapperElement>
            </PageSection>
          </>
        )
      }
    </BaseLayout>
  )
}

export const topicListQuery = graphql`
  query topicListQuery($topicSearchSlug: String!, $skip: Int!, $limit: Int!) {
    topicResources: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdAt] }
      filter: { frontmatter: { topics: { in: [$topicSearchSlug] } } }
      limit: $limit
      skip: $skip
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

export default TopicPage;
