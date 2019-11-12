import React from 'react'
import { Icon } from 'antd'
import {Link} from 'gatsby'

import {getTopicPagePath} from '../../paths'

import CardFrame from '../card-frame/CardFrame'

import * as styles from './TopicCard.style'

const TopicCard = ({
  slug,
  title,
  description,
  resources,
}) => (
  <CardFrame>
    <Link to={getTopicPagePath({topicSlug: slug})}>
      <h4 css={styles.title}>
        {title}
      </h4>
      {
        description && (
          <p css={styles.description}>
            {description}
          </p>
        )
      }
      <div css={styles.details}>
        <strong>{resources.length}</strong> resource{resources.length !== 1 ? 's' : ''}
      </div>
    </Link>
  </CardFrame>
);

export default TopicCard;
