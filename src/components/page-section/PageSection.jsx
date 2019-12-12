import React from 'react'

import * as styles from './PageSection.style'

const SectionPage = ({
  id,
  children,
  backgroundColor
}) => (
  <section
    id={id}
    css={styles.base}
    backgroundColor={backgroundColor}
  >
    {children}
  </section>
)

export default SectionPage;
