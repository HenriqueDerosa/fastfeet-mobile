import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container, TInput} from './styles'
import colors from '~/utils/colors'

const Input = ({style, icon, ...rest}, ref) => (
  <Container style={style}>
    {icon && (
      <Icon style={{marginRight: 10}} name={icon} size={20} color="#000" />
    )}
    <TInput {...rest} ref={ref} />
  </Container>
)

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
}

Input.defaultProps = {
  style: {},
  icon: null,
}

export default forwardRef(Input)
