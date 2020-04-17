import { takeLatest, call, put, all } from 'redux-saga/effects'

import { Alert } from 'react-native'
import api from '~/services/api'

import { getProblemsSuccess } from './actions'
import { GENERIC_ERROR_MESSAGE, ROUTES_APP } from '~/utils/constants'
import { createProblemSuccess } from '../problems/actions'
import * as Navigator from '~/routes/navigator'

export function* getProblemsRequest({ payload }) {
  try {
    const response = yield call(api.get, `order/${payload.id}/problems`)
    const problems = response.data
    yield put(getProblemsSuccess(problems))
  } catch (err) {
    Alert.alert('Erro', GENERIC_ERROR_MESSAGE)
  }
}

export function* createProblemRequest({ payload }) {
  try {
    const response = yield call(api.post, `order/${payload.id}/problems`, {
      description: payload.description,
    })

    const problem = response.data
    Navigator.goBack()

    yield put(createProblemSuccess(problem))
  } catch (err) {
    Alert.alert('Erro', GENERIC_ERROR_MESSAGE)
  }
}

export default all([
  takeLatest('@problems/GET_PROBLEMS_REQUEST', getProblemsRequest),
  takeLatest('@problems/CREATE_PROBLEM_REQUEST', createProblemRequest),
])
