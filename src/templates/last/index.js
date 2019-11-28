import React from 'react'
import { navigate } from 'gatsby'
import Helmet from 'react-helmet'
import {StaticQuery,graphql} from 'gatsby'

import BaseLayout from '../../components/layout/Layout'
import {getLastAddedPagePath} from '../../paths'
import Hero from '../../components/hero/Hero'
import ResourceList from '../../components/resource-list/ResourceList'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import PageBlock from '../../components/page-block/PageBlock'

const LastPage = ({
  pageContext,
}) => {
  const {
    section,
    resources,
    pagination,
  } = pageContext;

  const metaTitle = `Latest resouces about ${section.name}`;

  return (
    <StaticQuery
      query={graphql`
        query LatestHeadingQuery {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `}
      render={({ site }) => (
        <BaseLayout>
          {
            ({WrapperElement}) => (
              <>
                <Helmet>
                  <title>{ metaTitle }</title>
                  <meta property="og:title" content={`${metaTitle} - reactfeed.com`} />
                  <meta
                    property="og:url"
                    content={`${site.siteMetadata.siteUrl}${getLastAddedPagePath({index: pagination.currentPage, sectionSlug: section.slug})}`}
                  />
                  <link href={`${site.siteMetadata.siteUrl}${getLastAddedPagePath({sectionSlug: section.slug})}`} rel="canonical"></link>
                </Helmet>
                <PageSection>
                  <WrapperElement>
                    <Hero
                      title={`Latest added resources about ${section.name}`}
                    />
                  </WrapperElement>
                </PageSection>
                <Divider />
                <PageSection>
                  <WrapperElement>
                    <PageBlock
                      title={`${pagination.totalCount} available yet`}
                    >
                      <ResourceList
                        resources={resources}
                        pagination={pagination}
                        navigateTo={(page) => navigate(getLastAddedPagePath({index: page, sectionSlug: section.slug}))}
                      />
                    </PageBlock>
                  </WrapperElement>
                </PageSection>
              </>
            )
          }
        </BaseLayout>
      )}
    />
  )
}

export default LastPage;
