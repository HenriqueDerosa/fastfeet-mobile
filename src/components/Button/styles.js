import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import colors from '~/utils/colors'

export const Container = styled(RectButton)`
  height: 46px;
  width: 100%;
  padding: 0 16px;
  background-color: ${(props) => props.background};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 16px;
`
