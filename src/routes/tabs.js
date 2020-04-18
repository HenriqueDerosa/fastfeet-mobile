import React from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons'

import Profile from '~/pages/Profile'
import Orders from '~/pages/Orders'
import colors from '~/utils/colors'
import { TAB_BAR_HEIGHT, ROUTES_APP } from '~/utils/constants'

import Details from '~/pages/Details'
import ReportProblem from '~/pages/ReportProblem'
import ViewProblems from '~/pages/ViewProblems'
import ConfirmDelivery from '~/pages/ConfirmDelivery'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()

const defaultOptions = {
  headerStyle: {
    height: TAB_BAR_HEIGHT,
  },
  headerLeftContainerStyle: {
    color: colors.white,
  },
  headerTintColor: colors.white,
  headerBackTitleVisible: false,
}

const StackInTabs = () => (
  <Stack.Navigator
    initialRouteName={ROUTES_APP.APP}
    screenOptions={{
      headerTransparent: true,
      headerStatusBarHeight: 40,
    }}>
    <Stack.Screen
      name={ROUTES_APP.APP}
      component={Orders}
      options={{
        title: 'Entregas',
        headerTitle: null,
        ...defaultOptions,
      }}
    />
    <Stack.Screen
      name={ROUTES_APP.DETAILS}
      component={Details}
      options={{
        title: 'Detalhes da encomenda',
        ...defaultOptions,
      }}
    />
    <Stack.Screen
      name={ROUTES_APP.PROBLEM}
      component={ReportProblem}
      options={{
        title: 'Informar problema',
        ...defaultOptions,
      }}
    />
    <Stack.Screen
      name={ROUTES_APP.VIEW_PROBLEMS}
      component={ViewProblems}
      options={{
        title: 'Informar problema',
        ...defaultOptions,
      }}
    />
    <Stack.Screen
      name={ROUTES_APP.CONFIRM_DELIVERY}
      component={ConfirmDelivery}
      options={{
        title: 'Confirmar entrega',
        ...defaultOptions,
      }}
    />
  </Stack.Navigator>
)

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
      component={StackInTabs}
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
