import styled from 'styled-components/native'
import colors from '~/utils/colors'
import Button from '~/components/Button'
import { TextInput } from 'react-native-paper'
import { Dimensions } from 'react-native'

export const Card = styled.View`
  margin: auto;
  width: ${`${Dimensions.get('window').width - 100}px`};
  height: 370px;
  background-color: black;
  border-radius: 8px;
  border: 2px;
  border-color: white;
  overflow: hidden;
`

export const TextField = styled(TextInput)`
  width: 100%;
  background-color: transparent;
`

export const BigTitle = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`
export const Title = styled.Text`
  color: ${colors.quickSilver};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

export const Text = styled.Text`
  color: ${colors.tundora};
  text-transform: capitalize;
  font-weight: normal;
  font-size: 14px;
  margin-bottom: 15px;
`

export const Touchable = styled.TouchableOpacity`
  margin: 8px 0;
  height: 55px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  color: ${colors.tundora};
  background: ${colors.white};
  border: 1px solid #0000001a;
`
export const TextTouchable = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: ${colors.tundora};
`

export const ButtonsCollection = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  background-color: ${colors.whiteLilac};
  padding: 0;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
  height: 83px;
`
