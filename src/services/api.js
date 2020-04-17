import axios from 'axios'
import { camelizeKeys } from 'humps'

const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
})

// snake_case to camelCase to keep javascript name pattern
api.interceptors.response.use(
  (res) => ({
    ...res,
    data: camelizeKeys(res.data),
  }),
  (err) => {
    return Promise.reject(err)
  },
)

export default api
