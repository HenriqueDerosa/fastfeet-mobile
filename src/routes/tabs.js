import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import SignIn from '~/pages/SignIn'
import Orders from '~/pages/Orders'

const Tab = createMaterialBottomTabNavigator()

export default () => (
  <Tab.Navigator initialRouteName="Entregas">
    <Tab.Screen name="Entregas" component={Orders} />
    <Tab.Screen name="Meu Perfil" component={SignIn} />
  </Tab.Navigator>
)
