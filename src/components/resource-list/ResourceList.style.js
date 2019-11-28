import {css} from 'styled-components'

import { getSpacing } from '../../theme/utils'
import { SPACING_NAMES } from '../../theme/constants'

export const base = () => css`
  max-width: 52rem;
  margin: 0 auto;
`;

export const pagination = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
`;

export const more = ({theme}) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
  text-align: center;
`

export const item = ({theme}) => css`
  ${getSpacing.marginBottom(theme, SPACING_NAMES.BIG)}
  ${getSpacing.paddingBottom(theme, SPACING_NAMES.BIG)}
  border-bottom: 1px solid ${theme.palettes.neutrals.light};

  &:first-child {
    ${getSpacing.paddingTop(theme, SPACING_NAMES.BIG)}
    border-top: 1px solid ${theme.palettes.neutrals.light};
  }
`
