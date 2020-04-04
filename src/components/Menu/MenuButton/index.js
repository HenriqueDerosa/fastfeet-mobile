import React from 'react'
import PropTypes from 'prop-types'

import { Container, Text } from './styles'

export default function MenuButton({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Text {...rest}>{children}</Text>
    </Container>
  )
}

MenuButton.propTypes = {
  children: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

MenuButton.defaultProps = {
  selected: false,
}
