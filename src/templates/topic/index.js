import React from 'react'
import {Link,navigate} from 'gatsby'
import {Dropdown, Button, Menu} from 'antd'

import {convertTopicsToOrderedArray} from '../../utils/topics'
import {getTopicPagePath} from '../../paths'
import BaseLayout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import ResourceList from '../../components/resource-list/ResourceList'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import PageBlock from '../../components/page-block/PageBlock'
import TopicSelect from '../../components/topics-select/TopicSelect'

const TopicPage = ({
  pageContext
}) => {
  const {
    pagination,
    topic: currentTopic,
    topics
  } = pageContext

  const reactTopics = convertTopicsToOrderedArray(topics)

  return (
    <BaseLayout>
      {
        ({WrapperElement}) => (
          <>
            <PageSection>
              <WrapperElement>
                <Hero
                  title={`Topic: ${currentTopic.title}`}
                  description={currentTopic.description}
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <PageSection>
              <div style={{textAlign: 'center'}}>
                <TopicSelect
                  topics={reactTopics}
                  current={currentTopic.slug}
                />
              </div>
            </PageSection>
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
                    resources={currentTopic.resources}
                    pagination={pagination}
                    navigateTo={(page) => navigate(getTopicPagePath({index: page, topicSlug: currentTopic.slug}))}
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

export default TopicPage;
