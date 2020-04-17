import React, { useMemo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native'
import SignIn from '~/pages/SignIn'
import Tabs from './tabs'
import { ROUTES_APP, TAB_BAR_HEIGHT } from '~/utils/constants'
import { navigationRef } from '~/routes/navigator'
import { useSelector } from 'react-redux'
import { getUser } from '~/store/modules/auth/selectors'
import Details from '~/pages/Details'
import colors from '~/utils/colors'
import ReportProblem from '~/pages/ReportProblem'
import ViewProblems from '~/pages/ViewProblems'
import ConfirmDelivery from '~/pages/ConfirmDelivery'

const Stack = createStackNavigator()

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

export default () => {
  const signed = useSelector(getUser())
  const initialRouteName = useMemo(
    () => (signed ? ROUTES_APP.APP : ROUTES_APP.SIGNIN),
    [signed],
  )

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerTransparent: true,
          headerStatusBarHeight: 40,
        }}>
        <Stack.Screen
          name={ROUTES_APP.APP}
          component={Tabs}
          options={{ title: 'App', header: () => {} }}
        />
        <Stack.Screen
          name={ROUTES_APP.SIGNIN}
          component={SignIn}
          options={{ headerShown: false }}
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
    </NavigationContainer>
  )
}
