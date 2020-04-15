import React from 'react'
import { StatusBar } from 'react-native'

import PropTypes from 'prop-types'
import { SafeArea, Container, Background } from './styles'
import colors from '~/utils/colors'

const Layout = ({ children, ...params }) => {
  return (
    <SafeArea>
      <Background />
      <Container {...params}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.royalBlue}
        />
        {children}
      </Container>
    </SafeArea>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
