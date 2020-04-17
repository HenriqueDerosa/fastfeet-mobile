import { combineReducers } from 'redux'

import auth from './auth/reducer'
import orders from './orders/reducer'
import deliveryman from './deliveryman/reducer'
// import recipients from './recipients/reducer'
import problems from './problems/reducer'
// import user from './user/reducer'

export default combineReducers({
  auth,
  // recipients,
  problems,
  deliveryman,
  orders,
  // user,
})
