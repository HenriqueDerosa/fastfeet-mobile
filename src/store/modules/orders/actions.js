export function getOrdersRequest(deliverymanId) {
  return {
    type: '@orders/GET_ORDERS_REQUEST',
    payload: deliverymanId,
  }
}

export function getOrdersSuccess(orders) {
  return {
    type: '@orders/GET_ORDERS_SUCCESS',
    payload: orders,
  }
}
