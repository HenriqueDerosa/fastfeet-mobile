import styled from 'styled-components/native'

export const Image = styled.Image`
  align-self: center;
  width: ${(props) => `${props.size || 136}px`};
  height: ${(props) => `${props.size || 136}px`};
  border-radius: ${`${136 / 2}px`};
`
