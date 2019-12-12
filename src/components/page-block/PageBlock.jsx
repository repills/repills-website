import React from 'react'

import * as styles from './PageBlock.style'

export const PAGE_BLOCK_ALIGN = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
}

const PageBlock = ({
  title,
  caption,
  description,
  align,
  children
}) => (
  <>
    <div
      css={styles.header}
      align={align || PAGE_BLOCK_ALIGN.LEFT}
    >
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
