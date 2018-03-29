import {
  extRem,
  media
} from 'repills-react-components';
import { grid } from 'styled-components-grid';
import styled, { css } from 'styled-components';

export const PageContent = styled.div`
  ${grid()}
`;

export const HeaderContent = styled.div`
  ${grid()}
  padding-top: ${extRem(32)};
  align-items: center;
`;

const commonMain = css`
  ${grid.unit({ size: 1 })}
  ${media.LG`
    ${grid.unit({ size: 9/12 })}
    padding-right: ${extRem(48)};
  `}
`;

export const PageContentMain = styled.div`
  ${commonMain}
`;

export const HeaderContentMain = styled.div`
  ${commonMain}
  padding-bottom: ${extRem(32)};
`;

const commonSecondary = css`
  ${grid.unit({ size: 1 })}
  ${media.LG`
    ${grid.unit({ size: 3/12 })}
  `}
`;

export const PageContentSecondary = styled.div`${commonSecondary}`;
export const HeaderContentSecondary = styled.div`
  ${commonSecondary}
  padding-bottom: ${extRem(32)};
  align-items: center;
`;
