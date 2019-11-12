import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const base = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H2)}
  ${getSpacing.padding(theme, [SPACING_NAMES.SMALL, 0])}

  > a {
    color: ${theme.palettes.neutrals.lightest};
  }
`
