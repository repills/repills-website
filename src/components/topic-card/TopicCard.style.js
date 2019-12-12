import {css} from 'styled-components'
import {rgba} from 'polished'
import breakpoint from 'styled-components-breakpoint'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES, BREAKPOINTS_QUERY_NAMES } from '../../theme/constants'

export const title = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.BODY)}
  font-weight: bold;
  line-height: 1.4 !important;
  height: 2.8rem;
  margin: 0;
  color: ${theme.palettes.neutrals.dark};
`

export const description = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.SMALL)}
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  color: ${theme.palettes.neutrals.medium};
  height: 6.7rem;
  overflow: hidden;
  position: relative;

  &::after {
  content: '';
    position: absolute;
    height: 1.125rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, ${rgba(theme.palettes.neutrals.lightest, 0)}, ${rgba(theme.palettes.neutrals.lightest, 1)});
  }

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.LG)`
    height: 10.2rem;
  `}
`

export const details = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.MINI)}
  ${getSpacing.marginTop(theme, SPACING_NAMES.SMALLER)}
  font-weight: normal;
  color: ${theme.palettes.neutrals.basic};
  text-transform: uppercase;

  strong {
    font-weight: bold;
  }
`
