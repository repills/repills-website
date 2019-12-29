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
  box-shadow: 0 2px 4px rgba(3,27,78,.06);
  border: 1px solid rgba(0,0,0,.05);
  border-radius: .5rem;
  background-color: ${theme.palettes.neutrals.lightest};
`
