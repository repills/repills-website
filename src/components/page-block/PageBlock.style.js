import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const header = ({
  theme,
  align,
}) => css`
  ${getSpacing.paddingBottom(theme, SPACING_NAMES.BIG)}
  text-align: ${align};
`

export const caption = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.CAPTION)}
  color: ${theme.palettes.neutrals.medium};
`

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.H2)}
  color: ${theme.palettes.neutrals.dark};
  font-weight: normal;
  margin: 0;
`

export const description = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.BODY)}
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
`
