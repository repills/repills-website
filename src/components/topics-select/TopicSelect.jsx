import React, {useMemo} from 'react'
import {Dropdown, Button, Menu} from 'antd'
import {getTopicPagePath} from '../../paths'
import {Link} from 'gatsby'

const TopicSelect = ({
  topics,
  current,
  placement
}) => {
  const menu = useMemo(
    () => (
      <Menu
        selectedKeys={[current]}
      >
        {topics.map(topic => (
          <Menu.Item key={topic.slug}>
            <Link to={getTopicPagePath({topicSlug: topic.slug})}>
              {topic.title} ({topic.resources.length})
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    ),
    [current, topics]
  );

  return (
    <Dropdown
      overlay={menu}
      placement={placement || 'bottomLeft'}
    >
      <Button
        size="large"
      >
        Change topic
      </Button>
    </Dropdown>
  );
}

export default TopicSelect;
