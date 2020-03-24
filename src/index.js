import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler'

import '~/config/ReactotronConfig'
import {Provider} from 'react-redux'
import store from './store'

import Routes from '~/routes'
import colors from './utils/colors'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.royalBlue} />

      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  )
}

export default App
