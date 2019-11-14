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
  const { section } = pageContext

  const reactTopics = useMemo(
    () => convertTopicsToOrderedArray(section.topics),
    [section.topics]
  );

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <PageSection>
              <WrapperElement>
                <Hero
                  title={`Topics about ${section.name}`}
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <WrapperElement>
                <PageBlock
                  caption={`${reactTopics.length} available topics`}
                >
                  <TopicList topics={reactTopics} />
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

