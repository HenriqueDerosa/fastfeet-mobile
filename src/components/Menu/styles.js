import styled from 'styled-components'
import colors from '~/utils/colors'

export const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`
export const MenuItems = styled.View`
  flex-direction: row;
`

export const Title = styled.Text`
  color: ${colors.tundora};
  font-size: 22px;
  font-weight: bold;
`
