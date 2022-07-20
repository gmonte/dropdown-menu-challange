import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  * {
    font-family: 'Roboto' !important;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  height: 200px;
  padding: 20px;
`
