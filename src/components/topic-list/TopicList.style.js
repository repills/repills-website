import {css} from 'styled-components'
import { SPACING_NAMES } from '../../theme/constants'
import { getSpacing } from '../../theme/utils'

export const more = ({theme}) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
  text-align: center;
`
