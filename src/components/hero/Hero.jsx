import React from 'react'

import * as styles from './Hero.style'

const Hero = ({
  title,
  description,
  children,
}) => (
  <header css={styles.base}>
    <h1 css={styles.title}>
      {title}
    </h1>
    {
      description && (
        <p css={styles.description}>
          {description}
        </p>
      )
    }
    {children}
  </header>
)

export default Hero;
