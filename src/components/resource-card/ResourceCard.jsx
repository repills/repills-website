import React from 'react'

import * as styles from './ResourceCard.style'
import IconType from '../Icon/IconType'

const ResourceCard = ({
  link,
  title,
  author,
  abstract,
  typeLabel,
  icon,
  color,
}) => (
  <article css={styles.base}>
    <h4 css={styles.title}>
      {title}
    </h4>
    {
      abstract && (
        <p css={styles.description}>
          {abstract.replace(/^(.{300}[^\s]*).*/, "$1")} [continue]
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
    <div css={styles.actions}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
    <div css={styles.icon}>
      <IconType
        path={icon}
        size={40}
        color={color}
      />
    </div>
  </article>
);

export default ResourceCard;
