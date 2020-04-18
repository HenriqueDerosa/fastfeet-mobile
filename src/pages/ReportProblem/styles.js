import styled from 'styled-components/native'
import colors from '~/utils/colors'
import Button from '~/components/Button'
import { TextInput } from 'react-native'

export const Card = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;
  height: 300px;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding: 16px 12px;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  elevation: 1;
`

export const TextField = styled(TextInput)`
  width: 100%;
  background-color: transparent;
  height: 100%;
`
