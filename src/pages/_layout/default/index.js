import React from 'react'
import {StatusBar} from 'react-native'

import PropTypes from 'prop-types'
import {Container} from './styles'
import colors from '~/utils/colors'

const Layout = ({children}) => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      {children}
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
