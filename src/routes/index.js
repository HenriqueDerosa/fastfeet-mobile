import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from '~/pages/SignIn'
import Tabs from './tabs'

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Entrar"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="App" component={Tabs} options={{title: 'App'}} />
      <Stack.Screen name="Entrar" component={SignIn} />
    </Stack.Navigator>
  )
}
