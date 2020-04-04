import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'

import '~/config/ReactotronConfig'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '~/store'
import Routes from '~/routes'
import colors from '~/utils/colors'

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.royalBlue}
        />
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default Main
