import React from 'react'
import {Link} from 'gatsby'

import * as styles from './Navigatio.style'

const Navigation = () => (
  <div css={styles.base}>
    <Link to="/">
      Repills
    </Link>
  </div>
);

export default Navigation;
