import React from 'react'
import {Link} from 'gatsby'

import * as styles from './Navigatio.style'
import Logo from '../logo/Logo'

const Navigation = () => (
  <div css={styles.base}>
    <Link to="/">
      <Logo
        color="secondary.basic"
      />
    </Link>
  </div>
);

export default Navigation;
