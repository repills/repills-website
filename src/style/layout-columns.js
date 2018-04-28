import {
  extRem,
  media,
  theme
} from 'repills-react-components';
import { grid } from 'styled-components-grid';
import styled, { css } from 'styled-components';

const { palettes } = theme;
const { neutral } = palettes;


export const Header = styled.div`
  background-color: ${neutral.lower};
  padding: ${extRem(0, 20)};
`;

export const SimpleHeader = styled.div`
  padding: ${extRem(0, 20)};
`;

export const Page = styled.div`
  padding: ${extRem(0, 20, 60)};
`;

export const commonContent = css`
  ${media.XL`
    max-width: ${extRem(1150)};
    margin: 0 auto;
  `};
`;

export const PageContent = styled.div`
  ${grid()}
  ${commonContent}
  padding-top: ${extRem(52)};
  
  &.is-neutral-low {
    background-color: ${neutral.low};
  }
`;

export const SimplePageContent = styled.div`
  ${commonContent}
  padding-top: ${extRem(52)};
`;

export const HeaderContent = styled.div`
  ${grid()}
  padding-top: ${extRem(52)};
  align-items: center;
  ${commonContent}
`;

export const SimpleHeaderContent = styled.div`
  ${commonContent}
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
  padding-bottom: ${extRem(52)};
`;

const commonSecondary = css`
  ${grid.unit({ size: 1 })}
  ${media.LG`
    ${grid.unit({ size: 3/12 })}
  `}
`;

export const PageContentSecondary = styled.div`
  ${commonSecondary}
  margin-top: ${extRem(52)};

  ${media.LG`
    margin-top: 0;
  `}
`;
export const HeaderContentSecondary = styled.div`
  ${commonSecondary}
  padding-bottom: ${extRem(52)};
  align-items: center;
`;
