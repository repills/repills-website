import React from 'react'
import {navigate} from 'gatsby'

import {convertTopicsToOrderedArray} from '../../utils/topics'
import {getTopicPagePath} from '../../paths'
import BaseLayout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import ResourceList from '../../components/resource-list/ResourceList'
import PageSection from '../../components/page-section/PageSection'
import Divider from '../../components/divider/Divider'
import PageBlock from '../../components/page-block/PageBlock'
import TopicSelect from '../../components/topics-select/TopicSelect'

import * as styles from './style'

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
            <PageSection
              backgroundColor="primary.basic"
            >
              <WrapperElement>
                <Hero
                  title={`Topic: ${currentTopic.title}`}
                  description={currentTopic.description}
                />
              </WrapperElement>
            </PageSection>
            <Divider />
            <div css={styles.actionBar}>
              <TopicSelect
                topics={reactTopics}
                current={currentTopic.slug}
                placement="bottomCenter"
              />
            </div>
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
            <PageSection>
              <WrapperElement>
                {
                  currentTopic && currentTopic.similar && currentTopic.similar.length > 0 && (
                    <p css={styles.similar}>
                      {currentTopic.similar.join(' / ')}
                    </p>
                  )
                }
              </WrapperElement>
            </PageSection>
          </>
        )
      }
    </BaseLayout>
  )
}

export default TopicPage;
