import React from 'react'
import { ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { Container, Text } from './styles'
import colors from '~/utils/colors'

export const ButtonTheme = {
  DEFAULT: {
    background: colors.lima,
    color: colors.white,
  },
  DARK_TEXT: {
    background: 'transparent',
    color: colors.graniteGray,
  },
  TEXT_ONLY: {
    background: 'transparent',
    color: colors.royalBlue,
  },
}

export default function Button({ children, loading, theme, ...rest }) {
  return (
    <Container {...theme} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text {...theme}>{children}</Text>
      )}
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  theme: PropTypes.shape({
    color: PropTypes.string,
    background: PropTypes.string,
  }),
}
Button.defaultProps = {
  loading: false,
  theme: ButtonTheme.DEFAULT,
}
