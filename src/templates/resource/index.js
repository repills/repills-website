import React from 'react'
import {graphql, Link} from 'gatsby'
import { Button, Icon } from 'antd';
import types from '../../config/types'
import sectionsData from '../../config/sections'

import Divider from '../../components/divider/Divider'
import ResourceList from '../../components/resource-list/ResourceList'
import BaseLayout from '../../components/layout/Layout'
import SEO from '../../components/HelmetSEO'
import {normalizeResource} from '../../utils/resources'
import PageSection from '../../components/page-section/PageSection'
import PageBlock from '../../components/page-block/PageBlock'
import {getTopicPagePath} from '../../paths'
import * as styles from './style'

const ResourcePage = ({data, path}) => {
  const {
    title,
    author,
    link,
    abstract,
    typeLabel,
    publishedAt,
    color,
    rawTypes,
    topics,
  } = normalizeResource({node: data.markdownRemark});

  const {
    siteUrl,
    name,
  } = data.site.siteMetadata

  const relatedResources = data.related.edges.map(normalizeResource);

  const structuredData = [{
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`
    },
    headline: title,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Person",
      "name": author
    },
    image: `${siteUrl}/images/types/${types[rawTypes[0]].id}.jpg`,
    publisher: {
      "@type": "Organization",
      name,
      logo: {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo-reactfeed.jpg`
      }
    },
  }];

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <SEO
              title={title}
              description={abstract}
              path={path}
              structuredData={structuredData}
            />
            <PageSection>
              <WrapperElement wrapperMaxWidth={54}>
                <article css={styles.article}>
                  <h1 css={styles.title}>{title}</h1>
                  <div css={styles.details}>
                    <span
                      css={styles.type}
                      color={color}
                    >
                      {typeLabel}
                    </span> by <strong>{author}</strong>
                  </div>
                  {
                    abstract && (
                      <p css={styles.description}>
                        {abstract}
                      </p>
                    )
                  }
                  <div css={styles.actions}>
                    <Button
                      size="large"
                      type="primary"
                    >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open resource <Icon type="right" />
                        </a>
                    </Button>
                  </div>
                  <div css={styles.actions}>
                    { topics.map(topicId => {
                      const topic = sectionsData[0].topics[topicId]
                      return (
                        <Button
                          shape="round"
                        >
                          <Link to={getTopicPagePath({index: 1, topicSlug: topic.slug})}>
                            {topic.title}
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </article>
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection
              backgroundColor="neutrals.lighter"
            >
              <WrapperElement wrapperMaxWidth={54}>
                <PageBlock
                  title="Related resources"
                >
                  <ResourceList
                    resources={relatedResources}
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

export default ResourcePage;

export const ResourceQuery = graphql`
  query ResourceByReference($reference: String!, $resourceTopics: [String!], $relatedLimit: Int!) {
    site {
      siteMetadata {
        name
        title
        description
        siteUrl
        author
      }
    }
    markdownRemark(frontmatter: { reference: { eq: $reference } }) {
      id
      frontmatter {
        sections,
        link,
        title,
        author,
        type,
        publishedAt,
        topics,
        slug,
        suggestedBy,
        createdAt,
        reference,
        abstract
      }
    }
    related: allMarkdownRemark(
      limit: $relatedLimit,
      sort: { order: DESC, fields: [frontmatter___createdAt] }
      filter: { frontmatter: {
          topics: { in: $resourceTopics },
          reference: {nin: [$reference]}
        }
      }
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
