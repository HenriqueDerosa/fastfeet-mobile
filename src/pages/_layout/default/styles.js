import styled from 'styled-components/native'
import { Platform, Dimensions } from 'react-native'
import colors from '~/utils/colors'
import { TAB_BAR_HEIGHT } from '~/utils/constants'

export const SafeArea = styled.SafeAreaView`
  height: ${Dimensions.get('window').height - TAB_BAR_HEIGHT}px;
  background-color: ${colors.white};
`

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: flex-start;
  padding: ${(props) => (props.padding ? `${props.padding}px` : `0`)};
`
