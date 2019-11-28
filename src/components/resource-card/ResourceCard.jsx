import React from 'react'

import * as styles from './ResourceCard.style'

const ResourceCard = ({
  link,
  title,
  author,
  abstract,
  typeLabel,
  color,
}) => (
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
  </a>
);

export default ResourceCard;
