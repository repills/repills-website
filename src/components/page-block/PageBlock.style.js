import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H2)}
  ${getSpacing.marginBottom(theme, SPACING_NAMES.BIG)}
  font-weight: normal;

`
