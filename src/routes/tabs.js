import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Profile from '~/pages/Profile'
import Orders from '~/pages/Orders'
import colors from '~/utils/colors'
import { TAB_BAR_HEIGHT } from '~/utils/constants'

const Tab = createMaterialBottomTabNavigator()

export default () => (
  <Tab.Navigator
    initialRouteName="Entregas"
    activeColor={colors.royalBlue}
    inactiveColor={colors.quickSilver}
    style={{
      fontSize: 22,
    }}
    barStyle={{
      backgroundColor: colors.white,
      shadowRadius: 3,
      shadowOpacity: 0.5,
      height: TAB_BAR_HEIGHT,
    }}>
    <Tab.Screen name="Entregas" component={Orders} />
    <Tab.Screen name="Meu Perfil" component={Profile} />
  </Tab.Navigator>
)
