import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const base = ({ theme }) => css`
  ${getSpacing.padding(theme, [SPACING_NAMES.BIG, 0])}
`

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H1)}
  margin: 0;
`

export const description = ({ theme }) => css`
  ${getSpacing.margin(theme, [SPACING_NAMES.MEDIUM, 0, 0])}
  ${getTypography(theme, TYPOGRAPHY_NAMES.BODY)}
  color: ${theme.palettes.neutrals.medium};
  max-width: 60rem;
`
