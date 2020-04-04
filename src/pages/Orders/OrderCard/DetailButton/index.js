import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'
import colors from '~/utils/colors'

export const DetailButton = styled(BorderlessButton)`
  height: 46px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  padding: 4px;
  margin: 0 10px;
`

export const DetailButtonText = styled.Text`
  color: ${colors.royalBlue};
  font-weight: bold;
  font-size: 12px;
  padding-top: 10px;
`
