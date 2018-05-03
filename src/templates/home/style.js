import { css } from 'styled-components';
import {
  extRem,
  media,
  typography,
  theme
} from 'repills-react-components';

const { palettes } = theme;
const { neutral } = palettes;

export const newsletterWrapper = `
  max-width: ${extRem(900)};
  margin: 0 auto;
  padding: ${extRem(32)} 2rem;
`;

export const newsletter = css`
  background-color: ${neutral.highest};

  ${media.MD`
    padding: 0 ${extRem(20)};
  `};
`;