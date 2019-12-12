import { css } from 'styled-components'

import { getSpacing, getColor } from '../../theme/utils'
import { SPACING_NAMES } from '../../theme/constants'

export const base = ({
  theme,
  backgroundColor,
}) => css`
  position: relative;
  background-color: ${backgroundColor ? getColor(theme, backgroundColor) : theme.palettes.neutrals.lightest};
  ${getSpacing.padding(theme, [SPACING_NAMES.BIGGER, 0])}

  &:last-of-type {
    ${getSpacing.padding(theme, [SPACING_NAMES.BIGGER, 0, SPACING_NAMES.BIGGEST])}
  }
`
