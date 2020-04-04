import styled from 'styled-components/native'
import colors from '~/utils/colors'

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 40px 20px 0;
`

export const UserContainer = styled.View`
  flex-direction: row;
  margin-bottom: 22px;
`

export const TitleContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
  flex: 1;
`

export const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const Welcome = styled.Text`
  color: ${colors.graniteGray};
  font-size: 12px;
  font-weight: normal;
`

export const Title = styled.Text`
  color: ${colors.tundora};
  font-size: 22px;
  font-weight: bold;
`
