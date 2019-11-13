import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES, BREAKPOINTS_QUERY_NAMES } from '../../theme/constants'

export const base = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H2)}
  ${getSpacing.padding(theme, [SPACING_NAMES.MEDIUM, 0])}

  > a {
    color: ${theme.palettes.neutrals.lightest};
    width: 7rem;
    display: block;

    ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
      width: 9rem;
    `}
  }
`
