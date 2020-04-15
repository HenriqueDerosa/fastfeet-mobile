import React, { useMemo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native'
import SignIn from '~/pages/SignIn'
import Tabs from './tabs'
import { ROUTES_APP } from '~/utils/constants'
import { navigationRef } from '~/routes/navigator'
import { useSelector } from 'react-redux'
import { getUser } from '~/store/modules/auth/selectors'
import Details from '~/pages/Details'
import colors from '~/utils/colors'
import ReportProblem from '~/pages/ReportProblem'

const Stack = createStackNavigator()

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
            headerLeftContainerStyle: {
              color: colors.white,
            },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name={ROUTES_APP.PROBLEM}
          component={ReportProblem}
          options={{
            title: 'Informar problema',
            headerLeftContainerStyle: {
              color: colors.white,
            },
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
