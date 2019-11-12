import { css } from 'styled-components'

import { getSpacing, getColor } from '../../theme/utils'
import { SPACING_NAMES } from '../../theme/constants'

export const base = ({
  theme,
  backgroundColor,
}) => css`
  background-color: ${backgroundColor ? getColor(theme, backgroundColor) : theme.palettes.neutrals.lightest};
  ${getSpacing.padding(theme, [SPACING_NAMES.BIG, 0])}

  &:last-of-type {
    ${getSpacing.padding(theme, [SPACING_NAMES.BIG, 0, SPACING_NAMES.BIGGEST])}
  }
`
