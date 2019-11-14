import React from 'react'

import * as styles from './PageBlock.style'

const PageBlock = ({
  title,
  caption,
  description,
  children
}) => (
  <>
    <div css={styles.header}>
      {
        caption && (
          <div css={styles.caption} dangerouslySetInnerHTML={{__html: caption}} />
        )
      }
      {
        title && (
          <h2 css={styles.title} dangerouslySetInnerHTML={{__html: title}} />
        )
      }
      {
        description && (
          <p css={styles.description}>{description}</p>
        )
      }
    </div>
    {children}
  </>
)

export default PageBlock;
