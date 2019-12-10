import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const article = () => css`
  max-width: 52rem;
  margin: 0 auto;
`

export const title = () => css`
  margin: 0;
`

export const details = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.SMALLER)}
`

export const description = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.MEDIUM)}
`

export const actions = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.MEDIUM)}
`
export const type = ({ theme, color }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  padding: .15rem .3rem;
  color: white;
  background-color: ${color};
  font-weight: bold;
  text-transform: uppercase;
  margin-right: .3rem;
  border-radius: .25rem;
`

