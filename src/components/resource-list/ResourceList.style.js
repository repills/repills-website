import {css} from 'styled-components'

import { getSpacing } from '../../theme/utils'
import { SPACING_NAMES } from '../../theme/constants'

export const pagination = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
  display: flex;
  align-items: center;

  > button + button {
    margin-left: 1rem;
  }
`;

export const more = ({theme}) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
`

export const item = ({theme}) => css`
  ${getSpacing.marginBottom(theme, SPACING_NAMES.MEDIUM)}
  ${getSpacing.padding(theme, SPACING_NAMES.MEDIUM)}
  box-shadow: 0 2px 4px rgba(3,27,78,.07);
  background-color: ${theme.palettes.neutrals.lightest};
`
