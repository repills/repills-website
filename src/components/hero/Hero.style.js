import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES, BREAKPOINTS_QUERY_NAMES } from '../../theme/constants'

export const base = () => css`
  ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
    text-align: center;
  `}
`

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H1)}
  color: ${theme.palettes.neutrals.lightest};
  margin: 0;
`

export const description = ({ theme }) => css`
  ${getSpacing.margin(theme, [SPACING_NAMES.MEDIUM, 'auto', 0])}
  ${getTypography(theme, TYPOGRAPHY_NAMES.BODY)}
  color: ${theme.palettes.neutrals.light};
  max-width: 50rem;
`
