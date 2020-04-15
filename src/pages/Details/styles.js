import styled from 'styled-components/native'
import colors from '~/utils/colors'
import Button from '~/components/Button'

export const Card = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  width: 100%;
  justify-content: flex-start;
  background-color: ${colors.white};
  padding: 16px 12px;
  border-radius: 4px;
  box-shadow: 0 0 3px #0000001a;
`

export const BigTitle = styled.Text`
  color: ${colors.royalBlue};
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
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
  font-weight: normal;
  font-size: 14px;
  margin-bottom: 15px;
`

export const Touchable = styled(Button)`
  margin: 15px 0;
  width: 33.3%;
  height: 100%;
  color: red;
  justify-content: center;
  border-radius: 4px;
  color: ${colors.graniteGray};
  background: ${colors.whiteLilac};
`
export const TextTouchable = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
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
