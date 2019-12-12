import { css } from 'styled-components'
import {SPACING_NAMES} from '../../theme/constants'
// import { navHeight } from '../Navigation/Navigation.style'
import { getSpacing } from '../../theme/utils'

const navHeight = {
  mobile: '4rem',
  desktop: '6rem',
}

export const base = ({ theme }) => css`
  /* padding-top: ${navHeight.mobile}; */
  background-color: ${theme.palettes.neutrals.lightest};
`

export const header = ({ theme }) => css`
  background-color: ${theme.palettes.primary.basic};
`

export const footer = ({ theme }) => css`
  ${getSpacing.padding(theme, [SPACING_NAMES.BIG, 0])}
  color: ${theme.palettes.neutrals.basic};
  text-align: center;
`

export const wrapper = ({
  theme,
  width,
}) => css`
  margin: 0 auto;
  max-width: ${width || 80}rem;
  ${getSpacing.padding(theme, [0, SPACING_NAMES.MEDIUM])}
`
export const logoFooter = ({
  theme,
}) => css`
  ${getSpacing.margin(theme, [0, SPACING_NAMES.AUTO, SPACING_NAMES.SMALL])}
  max-width: 10rem;
`
