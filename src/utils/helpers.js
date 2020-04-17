import { ORDER_STATUS } from '~/utils/constants'

export const getOrderStatus = (order) => {
  const { startDate, endDate } = order

  if (startDate && !endDate) {
    return ORDER_STATUS.WITHDRAWN
  }

  if (startDate && endDate) {
    return ORDER_STATUS.DELIVERED
  }

  return ORDER_STATUS.PENDING
}
