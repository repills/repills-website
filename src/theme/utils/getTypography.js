import { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { BREAKPOINTS_QUERY_NAMES } from '../constants';

export default (theme, variant) => {
  const t = theme.typographyScale[variant];
  const mobileVariant = t.variants.mobile;
  const desktopVariant = t.variants.desktop;

  return css`
    font-weight: ${t.weight || 400};
    font-family: ${t.family};
    ${mobileVariant}

    ${breakpoint(BREAKPOINTS_QUERY_NAMES.MD)`
      ${desktopVariant}
    `}
  `;
};
