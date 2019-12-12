import { css } from 'styled-components'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES } from '../../theme/constants'

export const action = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
  color: ${theme.palettes.neutrals.lightest};
  text-transform: uppercase;
  border: 1px solid ${theme.palettes.neutrals.lightest};
  padding: .5rem 1rem;
  border-radius: .3rem;
  display: inline-flex;

  &:hover {
    color: ${theme.palettes.secondary.basic};
  }
`;

export const actionCount = ({ theme }) => css`
  color: ${theme.palettes.secondary.basic};
  margin-right: .75rem;
`;

