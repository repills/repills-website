import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const actionBar = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.SMALL)}
  text-align: center;
`

export const similar = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  color: ${theme.palettes.neutrals.medium};
  text-align: center;
`
