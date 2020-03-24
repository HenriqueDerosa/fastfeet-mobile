import styled from 'styled-components/native'
import colors from '~/utils/colors'

export const Container = styled.View`
  padding: 12px 20px;
  height: 46px;
  background: ${colors.white};
  border-radius: 4px;

  border-color: ${colors.alto};
  border-width: 1px;

  flex-direction: row;
  align-items: center;
`

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.quickSilver,
})`
  flex: 1;
  font-size: 15px;
  color: ${colors.tundora};
`
