import { css } from 'styled-components';
import { rgba } from 'polished';
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

`;

export const spinner = css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${neutral.lowest};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const navigationWrapper = pageWrapper;

export const footer = css`
  ${typography.body}
  color: ${neutral.medium};
  margin-top: ${extRem(68)};
  padding-bottom: ${extRem(32)};
  
  a {
    color: currentColor;
  }
`;