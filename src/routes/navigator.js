import { createRef } from 'react'
import { StackActions } from '@react-navigation/native'

export const navigationRef = createRef()

export const replace = (name, params) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export const navigate = (name, params) => {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params)
  } else {
    console.log('Navigator Error => navigationRef ', navigationRef, {
      name,
      params,
    })
  }
}
