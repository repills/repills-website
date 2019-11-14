import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES, BREAKPOINTS_QUERY_NAMES } from '../../theme/constants'

export const header = ({ theme }) => css`
  ${getSpacing.paddingBottom(theme, SPACING_NAMES.BIG)}
`

export const caption = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.CAPTION)}
  color: ${theme.palettes.neutrals.medium};

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
    text-align: center;
  `}
`

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H2)}
  font-weight: normal;
  margin: 0;

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
    text-align: center;
  `}
`

export const description = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.BODY)}
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
    text-align: center;
  `}
`
