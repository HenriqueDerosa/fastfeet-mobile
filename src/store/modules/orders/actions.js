export function getOrdersRequest(id) {
  return {
    type: '@orders/GET_ORDERS_REQUEST',
    payload: { id },
  }
}

export function getOrdersSuccess(orders) {
  return {
    type: '@orders/GET_ORDERS_SUCCESS',
    payload: orders,
  }
}
