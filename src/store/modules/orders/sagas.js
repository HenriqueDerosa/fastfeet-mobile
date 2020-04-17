import humps from 'humps'
import { takeLatest, call, put, all } from 'redux-saga/effects'

import { Alert } from 'react-native'
import api from '~/services/api'

import {
  getOrdersSuccess,
  createProblemSuccess,
  updateOrderSuccess,
} from './actions'
import { GENERIC_ERROR_MESSAGE, ROUTES_APP } from '~/utils/constants'
import * as Navigator from '~/routes/navigator'

export function* getOrdersRequest({ payload }) {
  try {
    const response = yield call(api.get, `deliverymen/${payload.id}/deliveries`)

    const orders = response.data
    yield put(getOrdersSuccess(orders))
  } catch (err) {
    Alert.alert('Erro', GENERIC_ERROR_MESSAGE)
  }
}

export function* updateOrdersRequest({ payload }) {
  try {
    const response = yield call(
      api.put,
      `order/${payload.id}`,
      humps.decamelizeKeys(payload.payload),
    )

    const order = response.data
    yield put(updateOrderSuccess(order))
  } catch (err) {
    Alert.alert('Erro', GENERIC_ERROR_MESSAGE)
  }
}

export default all([
  takeLatest('@orders/GET_ORDERS_REQUEST', getOrdersRequest),
  takeLatest('@orders/UPDATE_ORDERS_REQUEST', updateOrdersRequest),
])
