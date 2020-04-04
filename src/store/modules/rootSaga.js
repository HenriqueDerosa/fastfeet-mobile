import { all } from 'redux-saga/effects'

import auth from './auth/sagas'
import orders from './orders/sagas'
import deliveryman from './deliveryman/sagas'
// import recipients from './recipients/sagas'
// import problems from './problems/sagas'
// import user from './user/sagas'

export default function* rootSaga() {
  return yield all([auth, orders, deliveryman])
}
