import React, {useMemo} from 'react'
import TopicCard from '../topic-card/TopicCard'
import {Button, Row, Col} from 'antd'
import {getTopicsIndexPagePath} from '../../paths'
import {Link} from 'gatsby'

const TopicList = ({
  topics,
  limit
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
      <Row gutter={16}>
        {
          displayItems.map(topic => (
            <Col
              lg={{ span: 8 }}
              key={topic.slug}
              style={{ marginBottom: '1rem' }}
            >
              <TopicCard {...topic} />
            </Col>
          ))
        }
      </Row>
      {
        secureLimit < topics.length && (
          <Button size="large">
            <Link to={getTopicsIndexPagePath('reactjs')}>See all topics</Link>
          </Button>
        )
      }
    </>
  );
}

export default TopicList;
