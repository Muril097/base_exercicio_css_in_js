import styled from 'styled-components'

// !!! Ao nomear uma const NUNCA use letra minuscula !!!
const TitleBar = styled.header`
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`

export default TitleBar
