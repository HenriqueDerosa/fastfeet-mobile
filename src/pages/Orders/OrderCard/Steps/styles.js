import styled from 'styled-components/native'
import colors from '~/utils/colors'

export const Container = styled.View`
  align-self: center;
  align-items: center;
  height: 2px;
  width: 250px;
  margin: 28px 20px 9px;
  flex-direction: row;
  background: ${colors.royalBlue};
  justify-content: space-between;
`

export const ContainerNames = styled.View`
  align-self: center;
  align-items: center;
  width: 250px;
  margin: 0 20px 22px;
  flex-direction: row;
  /* background: ${colors.royalBlue}; */
  justify-content: space-between;
`

export const StatusName = styled.Text`
  color: ${colors.quickSilver};
  max-width: 44px
  font-size: 8px;
  text-align: center;
`

export const Bullet = styled.View`
  margin: 0;
  padding: 0;
  background: ${(props) => (props.filled ? colors.royalBlue : colors.white)};
  width: 10px;
  height: 10px;
  border-radius: ${`${10 / 2}px`};
  border: 1px solid ${colors.royalBlue};
`
