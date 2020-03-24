import React from 'react'

import {Image, Text} from 'react-native'

import Logo from '~/assets/logo.png'
import Layout from '~/pages/_layout/default'

// import {} from './styles'

const Orders = () => (
  <Layout>
    <Image source={Logo} />
    <Text>Entregas</Text>
  </Layout>
)

export default Orders
