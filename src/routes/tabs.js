import React from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Profile from '~/pages/Profile'
import Orders from '~/pages/Orders'
import colors from '~/utils/colors'
import { TAB_BAR_HEIGHT } from '~/utils/constants'

const Tab = createMaterialTopTabNavigator()

export default () => (
  <Tab.Navigator
    initialRouteName="Entregas"
    tabBarPosition="bottom"
    tabBarOptions={{
      activeTintColor: colors.royalBlue,
      inactiveTintColor: colors.quickSilver,
      showIcon: true,
      renderIndicator: () => {},
      labelStyle: {
        fontSize: 14,
        fontWeight: 'normal',
        textTransform: 'capitalize',
      },
      tabStyle: {
        height: TAB_BAR_HEIGHT,
        backgroundColor: colors.white,
      },
    }}
    barStyle={{
      height: TAB_BAR_HEIGHT,
    }}>
    <Tab.Screen
      name="Entregas"
      component={Orders}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="reorder" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Meu Perfil"
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="account-circle" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
)
