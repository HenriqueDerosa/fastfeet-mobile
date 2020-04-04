import React from 'react'
import { StatusBar } from 'react-native'

import PropTypes from 'prop-types'
import { SafeArea, Container } from './styles'
import colors from '~/utils/colors'

const Layout = ({ children, ...params }) => {
  return (
    <SafeArea>
      <Container {...params}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        {children}
      </Container>
    </SafeArea>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
