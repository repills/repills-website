import React from 'react'
import { navigate } from 'gatsby'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'

import BaseLayout from '../../components/layout/Layout'
import {getLastAddedPagePath} from '../../paths'
import Hero from '../../components/hero/Hero'
import ResourceList from '../../components/resource-list/ResourceList'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import PageBlock from '../../components/page-block/PageBlock'
import {normalizeResource} from '../../utils/resources'
import SEO from '../../components/HelmetSEO'

const LastPage = ({
  pageContext,
  data,
  path,
}) => {
  const {
    sectionName,
    sectionSlug,
    pagination,
  } = pageContext;

  const {
    latestSharedResources,
  } = data;

  const resources = latestSharedResources.edges.map(normalizeResource);
  const metaTitle = `Latest resouces about ${sectionName}`;

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
              title={metaTitle}
              links={links}
              path={path}
            />
            <PageSection
              backgroundColor="primary.basic"
            >
              <WrapperElement>
                <Hero
                  title={`Latest added resources about ${sectionName}`}
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <WrapperElement>
                <PageBlock
                  caption={`${pagination.totalCount} available yet`}
                >
                  <ResourceList
                    resources={resources}
                    pagination={pagination}
                    navigateTo={(page) => navigate(getLastAddedPagePath({index: page, sectionSlug: sectionSlug}))}
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

export const lastListQuery = graphql`
  query lastListQuery($sectionSlug: String!, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    latestSharedResources: allMarkdownRemark(
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

export default LastPage;
