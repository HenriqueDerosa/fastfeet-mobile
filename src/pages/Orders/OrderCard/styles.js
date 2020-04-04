import styled from 'styled-components/native'
import colors from '~/utils/colors'

export const Container = styled.View`
  box-shadow: 0 0 3px #0000001a;
  background-color: white;
  border-radius: 4px;
  margin: 8px 20px 28px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  margin: 13px 14px;
  align-items: center;
`
export const Title = styled.Text`
  color: ${colors.royalBlue};
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`

export const StatusContainer = styled.View`
  background-color: ${colors.white};
  margin: 13px;
`

export const DetailsContainer = styled.View`
  flex-direction: row;
  background-color: ${colors.whiteLilac};
  justify-content: space-between;
  align-items: center;
  padding: 18px 21px;
  /* width: 100%; */
`
export const ItemContainer = styled.View`
  align-items: flex-start;
`

export const ItemTitle = styled.Text`
  font-size: 8px;
  color: ${colors.quickSilver};
`

export const ItemValue = styled.Text`
  font-size: 12px;
  color: ${colors.tundora};
`
