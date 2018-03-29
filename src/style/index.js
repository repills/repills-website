import { css } from 'styled-components';
import { typography, theme, extRem } from 'repills-react-components';
import { media } from '../../utils/style/index';

const { palettes } = theme;
const { basic } = palettes;

export const base = css``;

export const page = css`
  padding: ${extRem(30,0)};
`;

export const title = css`
  ${typography.header1}
  color: ${basic.primaryHighest};
  margin: 0;
  line-height: 1;
`;
