import React from 'react'

import * as styles from './PageBlock.style'

const PageBlock = ({
  title,
  children
}) => (
  <>
    <h2 css={styles.title} dangerouslySetInnerHTML={{__html: title}} />
    {children}
  </>
)

export default PageBlock;
