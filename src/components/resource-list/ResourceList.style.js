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
  ${getSpacing.marginBottom(theme, SPACING_NAMES.BIG)}
  ${getSpacing.paddingBottom(theme, SPACING_NAMES.BIG)}
  border-bottom: 1px solid ${theme.palettes.neutrals.light};

  &:last-child {
    border-bottom: 0;
  }
`
