import React, { useMemo } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { NavigationContainer } from '@react-navigation/native'
import SignIn from '~/pages/SignIn'
import Tabs from './tabs'
import { ROUTES_APP, TAB_BAR_HEIGHT } from '~/utils/constants'
import { navigationRef } from '~/routes/navigator'
import { useSelector } from 'react-redux'
import { getUser } from '~/store/modules/auth/selectors'

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
