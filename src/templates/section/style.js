import { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import { getTypography, getSpacing } from '../../theme/utils'
import { TYPOGRAPHY_NAMES, SPACING_NAMES, BREAKPOINTS_QUERY_NAMES } from '../../theme/constants'

export const heroTypes = ({ theme }) => css`
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
  color: ${theme.palettes.secondary.basic};
  display: flex;

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
    justify-content: center;
  `}
`;

export const heroTypesItem = ({ theme }) => css`
  margin-right: 1.4rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const action = ({ theme }) => css`
  ${getTypography(theme, TYPOGRAPHY_NAMES.SMALL)}
  ${getSpacing.marginTop(theme, SPACING_NAMES.BIG)}
  color: ${theme.palettes.neutrals.lightest};
  text-transform: uppercase;
  border: 1px solid ${theme.palettes.neutrals.lightest};
  padding: .5rem 1rem;
  border-radius: .3rem;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${theme.palettes.secondary.basic};
  }

  ${breakpoint(BREAKPOINTS_QUERY_NAMES.SM)`
    display: inline-flex;
  `}
`;

export const actionCount = ({ theme }) => css`
  color: ${theme.palettes.secondary.basic};
  margin-right: .75rem;
`;


