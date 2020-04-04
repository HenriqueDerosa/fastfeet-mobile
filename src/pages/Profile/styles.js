import { Platform } from 'react-native'
import styled from 'styled-components/native'
import colors from '~/utils/colors'
import Button from '~/components/Button'

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: flex-start;
  padding: 35px;
  justify-content: center;
  background-color: ${colors.white};
`

export const Content = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${colors.graniteGray};
  font-size: 12px;
`

export const Text = styled.Text`
  color: ${colors.tundora};
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 15px;
`

export const Touchable = styled(Button)`
  margin: 15px 0;
  width: 100%;
  height: 40px;
  color: red;
  justify-content: center;
  border-radius: 4px;
  background: ${colors.cinnabar};
`
export const TextTouchable = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
`
