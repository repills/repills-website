import { css } from 'styled-components';
import {
  extRem,
  media,
  typography,
  theme
} from 'repills-react-components';

const { palettes } = theme;
const { basic } = palettes;

export const newsletterWrapper = `
  padding: 2rem;
`;

export const newsletter = css`
  background-color: ${basic.secondary};
  max-width: ${extRem(1100)};
  margin: 0 auto -1px;
  
  ${media.MD`
    padding: 0 1.25rem;
    margin-bottom: 4rem;
  `};
`;