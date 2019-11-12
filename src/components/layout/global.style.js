import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { getTypography } from '../../theme/utils'
import { TYPOGRAPHY_NAMES } from '../../theme/constants'

export const globalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  #root,
  html,
  body {
    height: 100vh;
    min-height: 100vh;
  }

  html {
    font-size: ${props => props.theme.remBase};
  }

  body {
    ${props => getTypography(props.theme, TYPOGRAPHY_NAMES.BODY)};
    color: ${props => props.theme.palettes.primary.darkest};
  }

  a {
    text-decoration: none;
    color: currentColor;
    font-weight: 700;
    cursor: pointer;
  }

  h1 {
    ${props => getTypography(props.theme, TYPOGRAPHY_NAMES.H1)};
    margin-bottom: 2rem;
  }

  h2 {
    ${props => getTypography(props.theme, TYPOGRAPHY_NAMES.TITLE)};
    margin-bottom: 1.5rem;
  }

  h3 {
    ${props => getTypography(props.theme, TYPOGRAPHY_NAMES.BODY)};
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  h4 {
    ${props => getTypography(props.theme, TYPOGRAPHY_NAMES.BODY)};
    margin-bottom: 1.5rem;
  }

  p {
    ${props => getTypography(props.theme, TYPOGRAPHY_NAMES.BODY)};
  }

  ul {
    ${props => getTypography(props.theme, TYPOGRAPHY_NAMES.BODY)};
    margin: 1.5rem 0;
  }

  ul {
    margin: 1.5rem 0;
  }

  li, ol {
    margin-bottom: .5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 700;
  }
`

export default globalStyle
