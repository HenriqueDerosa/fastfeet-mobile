import { Platform } from 'react-native'
import styled from 'styled-components/native'
import colors from '~/utils/colors'

import Input from '~/components/Input'
import Button from '~/components/Button'

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  padding: 25px;
  justify-content: center;
  background-color: ${colors.royalBlue};
`
export const Form = styled.View`
  align-items: stretch;
  margin-top: 50px;
  width: 100%;
`

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`
