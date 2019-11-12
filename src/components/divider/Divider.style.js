import { css } from 'styled-components'

export const base = ({ theme }) => css`
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: ${theme.palettes.neutrals.light};
`
