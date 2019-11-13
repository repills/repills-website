import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES, BREAKPOINTS_QUERY_NAMES } from '../../theme/constants'

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H2)}
  ${getSpacing.marginBottom(theme, SPACING_NAMES.BIG)}
  font-weight: normal;

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
    text-align: center;
  `}
`
