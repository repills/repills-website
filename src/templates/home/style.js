import { css } from 'styled-components';
import {
  typography,
  theme,
  extRem
} from 'repills-react-components';

const { palettes } = theme;
const { basic } = palettes;

export const base = css`
  max-width: ${extRem(1200)};
  margin: 0 auto;
`;

export const page = css`
`;

export const pageContent = css`
`;

export const title = css`
  ${typography.header1}
  color: ${basic.primaryHighest};
  margin: 0;
  line-height: 1;
`;