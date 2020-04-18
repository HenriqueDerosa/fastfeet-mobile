import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  token: null,
  loading: false,
  list: [],
}

export default function orders(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@orders/UPDATE_ORDERS_REQUEST':
      case '@orders/WITHDRAW_ORDERS_REQUEST':
      case '@orders/GET_ORDERS_REQUEST': {
        draft.loading = true
        break
      }
      case '@orders/GET_ORDERS_SUCCESS': {
        draft.loading = false
        draft.list = action.payload
        break
      }
      case '@orders/WITHDRAW_ORDERS_SUCCESS':
      case '@orders/UPDATE_ORDERS_SUCCESS': {
        draft.loading = false
        const existent = draft.list.find((i) => i.id === action.payload.id)
        if (existent) {
          const index = draft.list.indexOf(existent)
          draft.list[index] = action.payload
        } else {
          draft.list = [action.payload]
        }
        break
      }
      default:
        break
    }
  })
}
