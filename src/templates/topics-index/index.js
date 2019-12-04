import React from 'react'

import BaseLayout from '../../components/layout/Layout'
import TopicList from '../../components/topic-list/TopicList'
import Hero from '../../components/hero/Hero'
import PageSection from '../../components/page-section/PageSection'
import PageBlock from '../../components/page-block/PageBlock'
import Divider from '../../components/divider/Divider'

const TopicsPage = ({
  pageContext,
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

