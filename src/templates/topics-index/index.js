import React from 'react'

import BaseLayout from '../../components/layout/Layout'
import TopicList from '../../components/topic-list/TopicList'
import Hero from '../../components/hero/Hero'
import PageSection from '../../components/page-section/PageSection'
import PageBlock from '../../components/page-block/PageBlock'
import Divider from '../../components/divider/Divider'
import SEO from '../../components/SEO'

const TopicsPage = ({
  pageContext,
  path,
}) => {
  const {
    sectionName,
    topicsList,
  } = pageContext

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <SEO
              title={`Topics about ${sectionName}`}
              path={path}
            />
            <PageSection
              backgroundColor="primary.basic"
            >
              <WrapperElement>
                <Hero
                  title={`Topics about ${sectionName}`}
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <WrapperElement>
                <PageBlock
                  caption={`${topicsList.length} available topics`}
                >
                  <TopicList topics={topicsList} />
                </PageBlock>
              </WrapperElement>
            </PageSection>
          </>
        )
      }
    </BaseLayout>
  )
}

export default TopicsPage;

