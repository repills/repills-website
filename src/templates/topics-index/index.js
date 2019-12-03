import React, {useMemo} from 'react'

import BaseLayout from '../../components/layout/Layout'
import {convertTopicsToOrderedArray} from '../../utils/topics'
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
    topics,
  } = pageContext

  const sectionTopics = useMemo(
    () => convertTopicsToOrderedArray(topics),
    [topics]
  );

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
                  caption={`${sectionTopics.length} available topics`}
                >
                  <TopicList topics={sectionTopics} />
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

