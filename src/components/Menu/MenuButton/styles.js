import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import colors from '~/utils/colors'

export const Container = styled(BorderlessButton)`
  height: 46px;
  background-color: transparent;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 0 10px;
`

export const Text = styled.Text`
  color: ${(props) => (props.selected ? colors.royalBlue : colors.tundora)};
  text-decoration-line: ${(props) => (props.selected ? 'underline' : 'none')};
  text-decoration-style: solid;
  font-weight: bold;
  font-size: 12px;
`
