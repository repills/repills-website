import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const article = () => css`
`

export const title = () => css`
  margin: 0;
`

export const details = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  ${getSpacing.marginTop(theme, SPACING_NAMES.SMALLER)}
`

export const description = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.MEDIUM)}
  color: ${theme.palettes.neutrals.medium}
`

export const actions = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.MEDIUM)}

  > button + button {
    margin-left: .5rem;
  }
`
export const type = ({ theme, color }) => css`
  padding: .15rem .3rem;
  color: white;
  background-color: ${color};
  font-weight: bold;
  text-transform: uppercase;
  margin-right: .3rem;
  border-radius: .25rem;
`

