import React from 'react'
import {Link} from 'gatsby'

import {getTopicPagePath} from '../../paths'

import CardFrame from '../card-frame/CardFrame'

import * as styles from './TopicCard.style'

const TopicCard = ({
  slug,
  title,
  description,
  totalResources,
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
        <strong>{totalResources}</strong> resource{totalResources !== 1 ? 's' : ''}
      </div>
    </Link>
  </CardFrame>
);

export default TopicCard;
