import { takeLatest, call, put, all } from 'redux-saga/effects'

import { Alert } from 'react-native'
import api from '~/services/api'

import { getOrdersSuccess, createProblemSuccess } from './actions'
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

export default all([takeLatest('@orders/GET_ORDERS_REQUEST', getOrdersRequest)])
