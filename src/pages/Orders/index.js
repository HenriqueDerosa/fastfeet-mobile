import React, { useEffect } from 'react'

import { Image, Text } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import Logo from '~/assets/logo.png'
import Layout from '~/pages/_layout/default'
import { getOrdersRequest } from '~/store/modules/orders/actions'
import OrderCard from './OrderCard'
import { getUser } from '~/store/modules/auth/selectors'

const Orders = () => {
  const dispatch = useDispatch()
  const user = useSelector(getUser())
  const orders = useSelector((state) => state.orders.list)

  useEffect(() => {
    dispatch(getOrdersRequest(3))
  }, [dispatch])

  return (
    <Layout>
      <Image source={Logo} />
      {/* <Text>{user?.id}</Text>
      <Text>Entregas</Text>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))} */}
    </Layout>
  )
}

export default Orders
