import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Lato', sans-serif;
  }
  body {
    padding-bottom: 120px;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1024px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`
