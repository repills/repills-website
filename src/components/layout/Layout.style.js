import { css } from 'styled-components'
import {SPACING_NAMES, TYPOGRAPHY_NAMES} from '../../theme/constants'
// import { navHeight } from '../Navigation/Navigation.style'
import { getSpacing, getTypography } from '../../theme/utils'

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
  z-index: ${theme.zIndex.navbar};
  position: relative;
`

export const footer = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  ${getSpacing.padding(theme, [SPACING_NAMES.BIGGER, 0])}
  color: ${theme.palettes.neutrals.light};
  background-color: ${theme.palettes.primary.medium};
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
