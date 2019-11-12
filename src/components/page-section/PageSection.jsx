import React from 'react'

import * as styles from './PageSection.style'

const SectionPage = ({
  children,
  backgroundColor
}) => (
  <section
    css={styles.base}
    backgroundColor={backgroundColor}
  >
    {children}
  </section>
)

export default SectionPage;
