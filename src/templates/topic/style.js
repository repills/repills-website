import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const actionBar = ({ theme }) => css`
  ${getSpacing.padding(theme, [SPACING_NAMES.SMALL, 0])}
  text-align: center;
  background-color: ${theme.palettes.primary.medium};
`

export const similar = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  color: ${theme.palettes.neutrals.medium};
  text-align: center;
`
