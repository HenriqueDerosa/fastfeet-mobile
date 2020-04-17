import produce from '~/store/produceCamelized'

const INITIAL_STATE = {
  loading: false,
  list: null,
}

export default function problems(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problems/GET_PROBLEMS_REQUEST':
      case '@problems/CREATE_PROBLEM_REQUEST': {
        draft.loading = true
        break
      }
      case '@problems/GET_PROBLEMS_SUCCESS': {
        draft.loading = false
        draft.list = action.payload
        break
      }

      case '@problems/CREATE_PROBLEM_SUCCESS': {
        draft.loading = false
        if (draft.list) {
          draft.list = [...draft.list, { ...action.payload }]
        } else {
          draft.list = [action.payload]
        }
        break
      }
      default:
    }
  })
}
