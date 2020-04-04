import { takeLatest, call, put, all } from 'redux-saga/effects'

import { Alert } from 'react-native'
import api from '~/services/api'
import { ROUTES_APP } from '~/utils/constants'
import * as Navigator from '~/routes/navigator'

import { signInSuccess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { id } = payload
    const response = yield call(api.get, `deliverymen/${id}`)

    const deliveryman = response.data

    Navigator.replace(ROUTES_APP.APP)
    yield put(signInSuccess(deliveryman))
  } catch (err) {
    Alert.alert('Erro no login', 'Falha na autenticação, verifique seus dados')
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function signOut() {
  Navigator.replace(ROUTES_APP.SIGNIN)
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
])
