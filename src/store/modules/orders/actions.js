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
export function updateOrderRequest(id, payload) {
  return {
    type: '@orders/UPDATE_ORDERS_REQUEST',
    payload: { id, payload },
  }
}

export function updateOrderSuccess(order) {
  return {
    type: '@orders/UPDATE_ORDERS_SUCCESS',
    payload: order,
  }
}
