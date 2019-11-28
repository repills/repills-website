import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES, BREAKPOINTS_QUERY_NAMES } from '../../theme/constants'

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.TITLE)}
  margin: 0;
  font-weight: bold;
`

export const description = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.SMALL)}
  ${getTypography(theme, TYPOGRAPHY_NAMES.BODY)}
  color: ${theme.palettes.neutrals.medium};
  max-width: 60rem;
  display: none;
  overflow: hidden;
  position: relative;

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.LG)`
    display: block;
  `}
`

export const details = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.SMALLER)}
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}

  font-weight: normal;
  color: ${theme.palettes.neutrals.medium};
`

export const type = ({ color }) => css`
  color: ${color};
  font-weight: bold;
`
