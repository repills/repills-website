import React from 'react'
import {Tag} from 'antd'

import CardFrame from '../card-frame/CardFrame'

import * as styles from './ResourceCard.style'

const ResourceCard = ({
  link,
  title,
  author,
  abstract,
  typeLabel,
  color,
}) => (
  <CardFrame>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4 css={styles.title}>
        {title}
      </h4>
      {
        abstract && (
          <p css={styles.description}>
            {abstract}
          </p>
        )
      }
      <div css={styles.details}>
        <span
          css={styles.type}
          color={color}
        >
          {typeLabel}
        </span> by <strong>{author}</strong>
      </div>
    </a>
  </CardFrame>
);

export default ResourceCard;
