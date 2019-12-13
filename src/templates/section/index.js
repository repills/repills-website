import React from 'react'
import {graphql, Link} from 'gatsby'

import BaseLayout from '../../components/layout/Layout'
import {normalizeResource} from '../../utils/resources'
import {getLastAddedPagePath} from '../../paths'
import TopicList from '../../components/topic-list/TopicList'
import Hero from '../../components/hero/Hero'
import PageBlock, { PAGE_BLOCK_ALIGN } from '../../components/page-block/PageBlock'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import ResourceList from '../../components/resource-list/ResourceList'

import * as styles from './style'
import SEO from '../../components/HelmetSEO'
import { ICON_PATHS } from '../../components/Icon/Icon'
import IconType from '../../components/Icon/IconType'

const DISPLAYED_TOPICS = 9;

const heroTypes = [
  ICON_PATHS.ARTICLE,
  ICON_PATHS.TUTORIAL,
  // ICON_PATHS.LIBRARY,
  // ICON_PATHS.TALK,
  ICON_PATHS.COURSE,
  ICON_PATHS.TOOL,
  ICON_PATHS.BOOK
]

const SectionPage = ({
  data,
  pageContext,
  path,
}) => {
  const latestSharedResources = data.latestResources.edges.map(normalizeResource)
  const {
    sectionSlug,
    sectionName,
    resourcesCount,
    topicsList,
    pagination,
  } = pageContext

  const links = []

  if(pagination.previousPage) {
    links.push({
      href: getLastAddedPagePath({index: pagination.previousPage, sectionSlug}),
      rel: 'prev',
    })
  }

  if(pagination.nextPage) {
    links.push({
      href: getLastAddedPagePath({index: pagination.nextPage, sectionSlug}),
      rel: 'next',
    })
  }

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <SEO
              links={links}
              path={path}
            />
            <PageSection
              backgroundColor="primary.basic"
            >
              <WrapperElement wrapperMaxWidth={54}>
                <Hero
                  title={`Dive deep into ${sectionName} through high-quality resources`}
                  description={`
                    You can discover <strong>articles</strong>, <strong>tutorials</strong>,
                    <strong>libraries</strong>, <strong>talks</strong>, <strong>courses</strong>, <strong>tools</strong> and <strong>books</strong>.
                  `}
                >
                  <div css={styles.heroTypes}>
                    {
                      heroTypes.map(path => (
                        <div
                          key={path}
                          css={styles.heroTypesItem}
                        >
                          <IconType
                            path={path}
                            size={40}
                          />
                        </div>
                      ))
                    }
                  </div>
                  <Link
                    css={styles.action}
                    to={'#feed-start'}
                  >
                    <strong css={styles.actionCount}>
                    {resourcesCount}</strong> resources available yet
                  </Link>
                </Hero>
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection id="feed-start">
              <WrapperElement wrapperMaxWidth={54}>
                <PageBlock title={`Feed - Page ${pagination.currentPage}`}>
                  <ResourceList
                    resources={latestSharedResources}
                    pagination={pagination}
                    getPageUrl={(page) => getLastAddedPagePath({index: page, sectionSlug: sectionSlug, anchor: 'feed-start'})}
                  />
                </PageBlock>
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection
              backgroundColor="neutrals.lighter"
            >
              <WrapperElement>
                <PageBlock
                  title={`${topicsList.length} Topics about ${sectionName}`}
                  align={PAGE_BLOCK_ALIGN.CENTER}
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
  query sectionPageQuery($sectionSlug: String!, $skip: Int!, $limit: Int!) {
    latestResources: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___createdAt] }
      filter: { frontmatter: { sections: { in: [$sectionSlug] } } }
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
