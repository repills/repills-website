import React, {useMemo} from 'react'
import {graphql} from 'gatsby'
import {Link} from 'gatsby'
import {Button} from 'antd'

import ResourceCard from '../../components/resource-card/ResourceCard'
import BaseLayout from '../../components/layout/Layout'
import {normalizeResource} from '../../utils/resources'
import {convertTopicsToOrderedArray} from '../../utils/topics'
import {getLastAddedPagePath} from '../../paths'
import TopicList from '../../components/topic-list/TopicList'
import Hero from '../../components/hero/Hero'
import PageBlock from '../../components/page-block/PageBlock'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'

const DISPLAYED_TOPICS = 9;

const SectionPage = ({
  data,
  pageContext,
}) => {
  const latestSharedResources = data.latestSharedResources.edges.map(normalizeResource)
  const { section } = pageContext

  const topicsData = useMemo(
    () => convertTopicsToOrderedArray(section.topics),
    [section.topics]
  )

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <PageSection>
              <WrapperElement>
                <Hero
                  title={
                    `Dive deep into ${section.name} through high-quality resources`
                  }
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <WrapperElement>
                <PageBlock
                  title={`${section.resourcesCount} ${section.name} resources`}
                >
                  {
                    latestSharedResources.map(resource => (
                      <div
                        style={{ marginBottom: '1rem' }}
                        key={resource.slug}
                      >
                        <ResourceCard {...resource} />
                      </div>
                    ))
                  }
                  <Button size="large">
                    <Link to={getLastAddedPagePath({index: 2, sectionSlug: section.slug})}>
                      See all resources
                    </Link>
                  </Button>
                </PageBlock>
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <WrapperElement>
                <PageBlock
                  title={`${topicsData.length} Topics about ${section.name}`}
                >
                  <TopicList
                    topics={topicsData}
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
  query sectionPageQuery($sectionSlug: String!) {
    latestSharedResources: allMarkdownRemark(
      limit: 12,
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
