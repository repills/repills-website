import { css } from 'styled-components';
import {
  extRem,
  media,
  typography,
  theme
} from 'repills-react-components';

const { palettes } = theme;
const { neutral } = palettes;

export const base = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;

export const navigation = css`
  position: relative;
  z-index: ${theme.zIndex.navbar};
  background-color: ${neutral.lowest};
  border-bottom: 1px solid ${neutral.low};

  ${media.MD`
    padding: ${extRem(0, 24)};
  `};
`;

export const page = css`
  flex-grow: 1;
  overflow-y: auto;
  will-change: scroll-position;
`;

export const pageWrapper = css`
  background-color: ${neutral.lowest};
`;

export const navigationWrapper = pageWrapper;

export const footer = css`
  ${typography.small}
  color: ${neutral.high};
  padding: ${extRem(32,20)};
  border-top: 1px solid ${neutral.low};
  
  a {
    color: currentColor;
  }
`;

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