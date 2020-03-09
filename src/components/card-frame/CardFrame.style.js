import { css } from 'styled-components'

import { getSpacing } from '../../theme/utils'
import { SPACING_NAMES } from '../../theme/constants'

export const base = ({ theme }) => css`
  ${getSpacing.padding(theme, SPACING_NAMES.SMALL)}
  box-shadow: 0 1px 1px 1px rgba(10,16,34,.08);
  cursor: pointer;
  background-color: ${theme.palettes.neutrals.lightest};
  transition: transform .2s ease,box-shadow .2s ease;

  > a {
    display: block;
  }

  &:hover {
    box-shadow: 0 12px 28px 0 rgba(10,12,28,.2), 0 0 0 transparent;
    transform: translateY(-3px) translateZ(0);
  }
`
