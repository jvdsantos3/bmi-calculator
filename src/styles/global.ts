import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors['dark-eletric-blue']};
    font-family: ${({ theme }) => theme.fonts.principal};
    font-weight: ${({ theme }) => theme.typography.fontWeights.regular};
  }
`
