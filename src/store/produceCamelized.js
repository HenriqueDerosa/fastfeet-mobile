import produce from 'immer'
import { camelizeKeys } from 'humps'

/**
 * snake_case to camelCase to keep javascript name pattern
 */
export default (...params) => camelizeKeys(produce(...params))
