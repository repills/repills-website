import React from 'react'

import * as styles from './CardFrame.style'

const CardFrame = ({
  children
}) => (
  <article
    css={styles.base}
  >
    {children}
  </article>
)

export default CardFrame;
