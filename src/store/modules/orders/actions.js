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

export function withdrawOrderRequest(id, payload) {
  return {
    type: '@orders/WITHDRAW_ORDERS_REQUEST',
    payload: { id, payload },
  }
}

export function withdrawOrderSuccess(order) {
  return {
    type: '@orders/WITHDRAW_ORDERS_SUCCESS',
    payload: order,
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

export function deliverOrderRequest(id, signatureId) {
  return {
    type: '@orders/DELIVER_ORDER_REQUEST',
    payload: { id, signatureId },
  }
}

export function deliverOrderSuccess(order) {
  return {
    type: '@orders/DELIVER_ORDER_SUCCESS',
    payload: order,
  }
}
