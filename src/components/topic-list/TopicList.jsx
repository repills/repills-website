import React, {useMemo} from 'react'
import {Button, Row, Col} from 'antd'
import {Link} from 'gatsby'

import {getTopicsIndexPagePath} from '../../paths'
import TopicCard from '../topic-card/TopicCard'

import * as styles from './TopicList.style'

const TopicList = ({
  topics,
  limit,
  showDescription
}) => {
  const secureLimit = Math.min(limit || topics.length, topics.length);

  const displayItems = useMemo(
    () => {
      return secureLimit === topics.length
        ? topics
        : topics.slice(0, secureLimit)
    },
    [secureLimit, topics]
  )

  return (
    <>
      <Row gutter={[16, 16]}>
        {
          displayItems.map(topic => (
            <Col
              lg={{ span: 8 }}
              key={topic.slug}
            >
              <TopicCard
                {...topic}
                showDescription={showDescription}
              />
            </Col>
          ))
        }
      </Row>
      {
        secureLimit < topics.length && (
          <div css={styles.more}>
            <Button size="large">
              {/** @TODO pass sectionSlug */}
              <Link to={getTopicsIndexPagePath('reactjs')}>See all topics</Link>
            </Button>
          </div>
        )
      }
    </>
  );
}

export default TopicList;
